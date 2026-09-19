/**
 * Efeito sonoro sintetizado em Web Audio API.
 * Gera um sino cristalino suave ("plen") de forma síncrona e instantânea.
 */

let audioCtx = null;
let lastPlayTime = 0;

export function playSubtleBellChime() {
  const nowMs = Date.now();
  // Evita sobreposição acidental caso seja chamado repetidamente
  if (nowMs - lastPlayTime < 600) return;
  lastPlayTime = nowMs;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }

    const now = audioCtx.currentTime;

    // Master volume sutil e balanceado
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.15, now);
    masterGain.connect(audioCtx.destination);

    // Harmônicos do sino metálico/cristalino ("plen")
    const harmonics = [
      { freq: 1174.66, gain: 0.55, decay: 1.5 }, // Fundamental D6
      { freq: 1760.00, gain: 0.28, decay: 1.2 }, // 5ª pura A6
      { freq: 2349.32, gain: 0.20, decay: 0.8 }, // Oitava D7
      { freq: 3520.00, gain: 0.10, decay: 0.4 }  // Brilho / shimmer superior
    ];

    harmonics.forEach(({ freq, gain, decay }) => {
      const osc = audioCtx.createOscillator();
      const toneGain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Ataque rápido instantâneo síncrono seguido de decaimento natural exponencial
      toneGain.gain.setValueAtTime(0.0001, now);
      toneGain.gain.linearRampToValueAtTime(gain, now + 0.003);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(toneGain);
      toneGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay + 0.05);
    });
  } catch (e) {
    console.debug('Audio initialization skipped:', e);
  }
}
