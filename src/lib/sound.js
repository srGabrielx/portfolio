/**
 * Efeito sonoro sintetizado em Web Audio API e fallback HTML5 Audio.
 * Gera um sino cristalino suave ("plen") de alta fidelidade com suporte total
 * a qualquer navegador (Chrome, Safari, Firefox, Edge, Mobile), tanto ao pular
 * quanto ao completar a animação normalmente.
 */

let audioCtx = null;
let lastPlayTime = 0;
let chimeAudioUrl = null;
let preloadedAudio = null;
let isChimeArmed = false;
const unlockListeners = new Set();

export function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

export function isAudioUnlocked() {
  if (typeof window === 'undefined') return false;
  const ctx = getAudioContext();
  return Boolean(ctx && ctx.state === 'running');
}

/**
 * Gera em memória um arquivo de áudio WAV (PCM 16-bit) do sino cristalino
 * para reprodução direta via elemento de áudio nativo HTML5.
 */
function getChimeAudioUrl() {
  if (chimeAudioUrl) return chimeAudioUrl;
  if (typeof window === 'undefined' || !window.URL || !window.Blob) return null;

  try {
    const sampleRate = 22050;
    const duration = 0.9;
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    const writeString = (offset, str) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, numSamples * 2, true);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const env1 = Math.exp(-t * 3.2);
      const env2 = Math.exp(-t * 4.8);
      const s1 = Math.sin(2 * Math.PI * 1174.66 * t) * env1 * 0.45; // D6
      const s2 = Math.sin(2 * Math.PI * 1760.00 * t) * env2 * 0.25; // A6
      const s3 = Math.sin(2 * Math.PI * 2349.32 * t) * env2 * 0.15; // D7
      let sample = s1 + s2 + s3;
      sample = Math.max(-1, Math.min(1, sample));
      view.setInt16(44 + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
    }

    const blob = new Blob([buffer], { type: 'audio/wav' });
    chimeAudioUrl = URL.createObjectURL(blob);
    return chimeAudioUrl;
  } catch (_) {
    return null;
  }
}

/**
 * Obtém elemento de áudio nativo pré-carregado
 */
function getPreloadedAudio() {
  if (typeof window === 'undefined') return null;
  if (!preloadedAudio) {
    const url = getChimeAudioUrl();
    if (url) {
      try {
        preloadedAudio = new Audio(url);
        preloadedAudio.volume = 0.28;
        preloadedAudio.preload = 'auto';
        preloadedAudio.load();
      } catch (_) {}
    }
  }
  return preloadedAudio;
}

/**
 * Síntese em Web Audio API com envelope harmônico e timing preciso
 */
function synthesizeChime(ctx) {
  try {
    if (!ctx) return;
    const startTime = ctx.currentTime + 0.015;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.24, startTime);
    masterGain.connect(ctx.destination);

    const harmonics = [
      { freq: 1174.66, gain: 0.55, decay: 1.4 },
      { freq: 1760.00, gain: 0.28, decay: 1.1 },
      { freq: 2349.32, gain: 0.20, decay: 0.7 },
      { freq: 3520.00, gain: 0.10, decay: 0.4 }
    ];

    harmonics.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const toneGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      toneGain.gain.setValueAtTime(0.0001, startTime);
      toneGain.gain.linearRampToValueAtTime(gain, startTime + 0.004);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + decay);

      osc.connect(toneGain);
      toneGain.connect(masterGain);

      osc.start(startTime);
      osc.stop(startTime + decay + 0.05);
    });
  } catch (_) {}
}

/**
 * Tenta tocar via HTML5 Audio
 */
function playHtmlAudio() {
  const audio = getPreloadedAudio();
  if (!audio) return false;
  try {
    audio.currentTime = 0;
    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Se o Chrome ou navegador bloqueou o áudio na conclusão automática (100%)
 * por ausência de gesto prévio do usuário, arma o disparo para o primeiro toque/clique.
 */
export function armPendingChime() {
  if (isChimeArmed || typeof window === 'undefined') return;
  isChimeArmed = true;

  const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'keydown', 'click'];

  const triggerChime = async () => {
    if (!isChimeArmed) return;
    isChimeArmed = false;

    gestureEvents.forEach((evt) => {
      window.removeEventListener(evt, triggerChime, { capture: true });
    });

    try {
      const ctx = getAudioContext();
      if (ctx) {
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }
        if (ctx.state === 'running') {
          synthesizeChime(ctx);
          return;
        }
      }
    } catch (_) {}

    playHtmlAudio();
  };

  gestureEvents.forEach((evt) => {
    window.addEventListener(evt, triggerChime, { capture: true, once: true, passive: true });
  });
}

/**
 * Registra desbloqueio proativo do áudio em qualquer interação do usuário
 */
export function initAudioUnlock(onUnlocked) {
  if (typeof window === 'undefined') return;

  if (onUnlocked) {
    unlockListeners.add(onUnlocked);
    if (isAudioUnlocked()) {
      try { onUnlocked(); } catch (_) {}
    }
  }

  const unlock = async () => {
    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        await ctx.resume();
      }
      if (ctx && ctx.state === 'running') {
        unlockListeners.forEach((fn) => {
          try { fn(); } catch (_) {}
        });
      }
    } catch (_) {}
  };

  const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'keydown', 'click'];
  gestureEvents.forEach((evt) => {
    window.addEventListener(evt, unlock, { capture: true, once: false, passive: true });
  });

  // Tenta também desbloquear proativamente caso o contexto já tenha permissão
  try {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().then(() => {
        if (ctx.state === 'running') {
          unlockListeners.forEach((fn) => {
            try { fn(); } catch (_) {}
          });
        }
      }).catch(() => {});
    }
  } catch (_) {}

  // Pré-inicializa o áudio HTML5
  getPreloadedAudio();
}

if (typeof window !== 'undefined') {
  initAudioUnlock();
}

/**
 * Reproduz o sino cristalino.
 * Funciona tanto ao pular quanto ao completar a animação.
 */
export async function playSubtleBellChime() {
  const nowMs = Date.now();
  if (nowMs - lastPlayTime < 250) return true;
  lastPlayTime = nowMs;

  let played = false;

  // 1. Tenta Web Audio API garantindo resume prévio
  try {
    const ctx = getAudioContext();
    if (ctx) {
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume();
        } catch (_) {}
      }

      if (ctx.state === 'running') {
        synthesizeChime(ctx);
        played = true;
      }
    }
  } catch (_) {}

  // 2. Tenta HTML5 Audio nativo como reforço
  try {
    if (playHtmlAudio()) {
      played = true;
    }
  } catch (_) {}

  // 3. Se o navegador (ex: Chrome em visita inicial estrita sem toque) impediu o som imediato:
  // Fica armado para tocar instantaneamente no primeiro toque/clique que o usuário der na tela
  if (!played) {
    armPendingChime();
  }

  return played;
}
