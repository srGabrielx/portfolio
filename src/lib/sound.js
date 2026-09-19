/**
 * Efeito sonoro sintetizado em Web Audio API.
 * Gera um sino cristalino suave ("plen") com suporte a políticas de autoplay de navegadores.
 */

let audioCtx = null;
let lastPlayTime = 0;

export function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

/**
 * Desbloqueia proativamente o AudioContext em qualquer primeiro gesto do usuário
 * (clique, toque na tela, tecla ou ponteiro).
 */
export function initAudioUnlock() {
  if (typeof window === 'undefined') return;

  const unlock = async () => {
    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        await ctx.resume();
      }
    } catch (_) {}
  };

  const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'mousedown', 'keydown', 'click'];
  gestureEvents.forEach((evt) => {
    window.addEventListener(evt, unlock, { capture: true, once: false, passive: true });
  });

  // Tenta também desbloquear imediatamente caso o ambiente já permita autoplay (ex: iframe com permissions)
  try {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  } catch (_) {}
}

// Inicializa o desbloqueador assim que o módulo é carregado no navegador
if (typeof window !== 'undefined') {
  initAudioUnlock();
}

function synthesizeChime(ctx) {
  const now = ctx.currentTime;

  // Master volume sutil e balanceado
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.2, now);
  masterGain.connect(ctx.destination);

  // Harmônicos do sino metálico/cristalino ("plen")
  const harmonics = [
    { freq: 1174.66, gain: 0.55, decay: 1.5 }, // Fundamental D6
    { freq: 1760.00, gain: 0.28, decay: 1.2 }, // 5ª pura A6
    { freq: 2349.32, gain: 0.20, decay: 0.8 }, // Oitava D7
    { freq: 3520.00, gain: 0.10, decay: 0.4 }  // Brilho / shimmer superior
  ];

  harmonics.forEach(({ freq, gain, decay }) => {
    const osc = ctx.createOscillator();
    const toneGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Ataque rápido e decaimento exponencial natural
    toneGain.gain.setValueAtTime(0.0001, now);
    toneGain.gain.linearRampToValueAtTime(gain, now + 0.004);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

    osc.connect(toneGain);
    toneGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + decay + 0.05);
  });
}

export async function playSubtleBellChime() {
  const nowMs = Date.now();
  // Evita sobreposição acidental em caso de múltiplos disparos simultâneos
  if (nowMs - lastPlayTime < 400) return;
  lastPlayTime = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch (err) {
        console.debug('Autoplay policy aguardando interação do usuário:', err);
      }
    }

    // Se o navegador ainda mantiver o contexto suspenso devido à política de autoplay,
    // registra um gatilho único para tocar no primeiríssimo clique ou toque
    if (ctx.state === 'suspended') {
      const unlockAndPlay = async () => {
        ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
          window.removeEventListener(evt, unlockAndPlay, { capture: true });
        });
        try {
          await ctx.resume();
          if (ctx.state === 'running') {
            synthesizeChime(ctx);
          }
        } catch (_) {}
      };

      ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
        window.addEventListener(evt, unlockAndPlay, { capture: true, once: true, passive: true });
      });
      return;
    }

    synthesizeChime(ctx);
  } catch (e) {
    console.debug('Audio initialization skipped:', e);
  }
}

