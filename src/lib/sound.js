// src/lib/sound.js

let chime = null;
let audioCtx = null;
let audioBuffer = null;
let isUnlocked = false;

// Inicializa a instância HTMLAudioElement e tenta carregar o buffer Web Audio
if (typeof window !== 'undefined') {
  try {
    chime = new Audio('/sounds/chime.mp3');
    chime.preload = 'auto';
    chime.volume = 0.45;
  } catch (e) {
    console.warn('Audio init error:', e);
  }

  // Pré-carrega o arraybuffer para Web Audio API (muito mais tolerante e sem delay após desbloqueio)
  fetch('/sounds/chime.mp3')
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        return audioCtx.decodeAudioData(arrayBuffer);
      }
    })
    .then((decodedData) => {
      if (decodedData) {
        audioBuffer = decodedData;
      }
    })
    .catch((err) => {
      // Fallback silencioso para HTMLAudio normal
    });
}

/**
 * Desbloqueia o contexto de áudio em qualquer interação do usuário
 * (pointerdown, click, touchstart, keydown, mousemove)
 */
export function unlockChime() {
  if (isUnlocked) return;

  // 1. Desbloqueia o Web Audio Context
  if (audioCtx) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        isUnlocked = true;
      }).catch(() => {});
    } else {
      isUnlocked = true;
    }
  }

  // 2. Desbloqueia o HTMLAudio element caso necessário
  if (chime) {
    const playPromise = chime.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          chime.pause();
          chime.currentTime = 0;
          isUnlocked = true;
        })
        .catch(() => {
          // Normal se ainda não tiver ocorrido o gesto
        });
    }
  }
}

/**
 * Tenta reproduzir o som de conclusão.
 * Utiliza Web Audio API se disponível (tocado direto sem restrição de mídia)
 * e fallback para HTML5 Audio.
 */
export async function playChime() {
  // Tentativa 1: Web Audio API (se buffer foi carregado e contexto ativado)
  if (audioCtx && audioBuffer) {
    try {
      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }
      const source = audioCtx.createBufferSource();
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.45;

      source.buffer = audioBuffer;
      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      source.start(0);
      return true;
    } catch (e) {
      console.log('WebAudio playback attempt:', e.message);
    }
  }

  // Tentativa 2: HTMLAudioElement
  if (chime) {
    try {
      chime.currentTime = 0;
      chime.volume = 0.45;
      await chime.play();
      return true;
    } catch (error) {
      console.log('HTMLAudio playback blocked:', error.name, error.message);
      return false;
    }
  }

  return false;
}
