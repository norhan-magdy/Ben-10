const tracks = ["classic", "alienForce", "ultimateAlien"];

function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.loop = true;
  this.sound.preload = "none";
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = () =>
    this.sound.play().catch((err) => console.log("Playback failed:", err));
  this.stop = () => this.sound.pause();
}

const mySound = new Sound(`${projectRoot}assets/audio/classic.mp3`);
mySound.sound.volume = 0.3;

function saveSoundState() {
  localStorage.setItem("soundTrack", mySound.sound.src);
  localStorage.setItem("currentTime", mySound.sound.currentTime);
  localStorage.setItem("volume", mySound.sound.volume);
}

document.addEventListener("DOMContentLoaded", () => {
  const storedSrc = localStorage.getItem("soundTrack");
  const storedTime = parseFloat(localStorage.getItem("currentTime"));
  const storedVolume = parseFloat(localStorage.getItem("volume"));

  if (storedSrc) {
    mySound.sound.src = storedSrc;
    mySound.sound.currentTime = isNaN(storedTime) ? 0 : storedTime;
    mySound.sound.volume = isNaN(storedVolume) ? 0.3 : storedVolume;
  } else {
    saveSoundState();
  }

  mySound.play();

  const bgSound = document.getElementById("background-music");
  const controlSoundTrack = document.getElementById("circle-control");
  const saveBtn = document.getElementById("save");

  bgSound?.addEventListener("change", () => {
    mySound.sound.volume = bgSound.value / 100;
    saveSoundState();
  });

  controlSoundTrack?.addEventListener("click", () => {
    const currentTrackIndex = tracks.findIndex((t) =>
      mySound.sound.src.includes(t)
    );
    const nextTrack = tracks[(currentTrackIndex + 1) % tracks.length];
    mySound.sound.src = `${projectRoot}assets/audio/${nextTrack}.mp3`;
    saveSoundState();
    mySound.play();
  });

  saveBtn?.addEventListener("click", () => {
    saveSoundState();
    window.location.href = `${projectRoot}`;
  });
});

window.addEventListener("beforeunload", () => {
  saveSoundState();
  mySound.stop();
});
