let songIndex = 0;
let audioElement = new Audio(
  "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3"
);
let mainplaybutton = document.getElementById("mainplaybutton");
let songtime = document.getElementById("songtime");
let volumeControl = document.getElementById("volume");
let songs = [
  {
    songName: "Aasan Nahin Yahan Aashiqui 2",
    filePath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan-Nahin-Yahan-Aashiqui-2-500-500.jpg",
  },
];

mainplaybutton.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mainplaybutton.classList.remove("fa-circle-play");
    mainplaybutton.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    mainplaybutton.classList.remove("fa-circle-pause");
    mainplaybutton.classList.add("fa-circle-play");
  }
});
audioElement.addEventListener("timeupdate", () => {
  songtime.value = (audioElement.currentTime / audioElement.duration) * 100;
});
songtime.addEventListener("input", (event) => {
  audioElement.currentTime = (songtime.value / 100) * audioElement.duration;
});
songtime;
volumeControl.addEventListener("input", () => {
  const volume = volumeControl.value;
  audioElement.volume = volume;
});
audioElement.addEventListener("loadedmetadata", () => {
  volumeControl.value = audio.volume;
});
