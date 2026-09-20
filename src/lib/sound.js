// src/lib/sound.js

let chime = null;
let unlocked = false;

if (typeof window !== 'undefined') {
  chime = new Audio('/sounds/chime.mp3');
  chime.preload = 'auto';
  chime.volume = 0.35;
}

export function unlockChime() {
  if (!chime || unlocked) return;
  unlocked = true;

  chime.volume = 0;
  const promise = chime.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        chime.pause();
        chime.currentTime = 0;
        chime.volume = 0.35;
      })
      .catch((error) => {
        unlocked = false;
        chime.volume = 0.35;
        console.log("CHIME UNLOCK:", error.name, error.message);
      });
  }
}

export async function playChime() {
  if (!chime) return false;
  chime.currentTime = 0;
  chime.volume = 0.35;

  try {
    await chime.play();
    return true;
  } catch (error) {
    console.log("CHIME:", error.name, error.message);
    return false;
  }
}
