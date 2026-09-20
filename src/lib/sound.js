// src/lib/sound.js

let chime = null;

if (typeof window !== 'undefined') {
  chime = new Audio('/sounds/chime.mp3');
  chime.preload = 'auto';
  chime.volume = 0.35;
}

export async function playChime() {
  if (!chime) return false;
  chime.currentTime = 0;

  try {
    await chime.play();
    return true;
  } catch (error) {
    // Se o Chrome ou navegador bloquear por falta de interação prévia, apenas ignora
    return false;
  }
}
