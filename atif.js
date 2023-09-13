let songIndex = 0;
let audioElement = new Audio(
  "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3"
);
let firstPlayButton = document.getElementById("firstPlayButton");
let mainplaybutton = document.getElementById("mainplaybutton");
let volumebutton = document.getElementById("volumebutton");
let songtime = document.getElementById("songtime");
let volumeControl = document.getElementById("volume");
let songItems = Array.from(document.getElementsByClassName("song-items"));
let iconHeart = "like-green.png";
console.log(iconHeart);
let songs = [
  {
    Indexnum: "1.",
    songName: "12 Bajay",
    movieName: "12 Bajay",
    duration: "06:17",
    filePath: "Atif Aslam/12 Bajay Atif Aslam/12 Bajay Atif Aslam 320 Kbps.mp3",
    coverPath: "Atif Aslam/12 Bajay Atif Aslam/12-Bajay-Atif-Aslam-500-500.jpg",
  },
  {
    Indexnum: "2.",
    songName: "Allah Duhai Hai",
    movieName: "Race 2",
    duration: "04:15",
    filePath:
      "Atif Aslam/Allah Duhai Hai Race 2/Allah Duhai Hai Race 2 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Allah Duhai Hai Race 2/Allah-Duhai-Hai-Race-2-500-500.jpg",
  },
  {
    Indexnum: "3.",
    songName: "Be Intehaan",
    movieName: "Race 2",
    duration: "04:50",
    filePath: "Atif Aslam/Be Intehaan Race 2/Be Intehaan Race 2 320 Kbps.mp3",
    coverPath: "Atif Aslam/Be Intehaan Race 2/Be-Intehaan-Race-2-500-500.jpg",
  },
  {
    Indexnum: "4.",
    songName: "Dil Diyan Gallan",
    movieName: "Tiger Zinda Hai",
    duration: "04:20",
    filePath:
      "Atif Aslam/Dil Diyan Gallan Tiger Zinda Hai/Dil Diyan Gallan Tiger Zinda Hai 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Dil Diyan Gallan Tiger Zinda Hai/Dil-Diyan-Gallan-Tiger-Zinda-Hai-500-500.jpg",
  },
  {
    Indexnum: "5.",
    songName: "Dil Meri Na Sune",
    movieName: "Geniust",
    duration: "03:56",
    filePath:
      "Atif Aslam/Dil Meri Na Sune Genius/Dil Meri Na Sune Genius 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Dil Meri Na Sune Genius/Dil-Meri-Na-Sune-Genius-500-500.jpg",
  },
  {
    Indexnum: "6.",
    songName: "Jeena Jeena",
    movieName: "Badlapur",
    duration: "03:49",
    filePath:
      "Atif Aslam/Jeena Jeena Badlapur/Jeena Jeena Badlapur 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Jeena Jeena Badlapur/Jeena-Jeena-Badlapur-500-500.jpg",
  },
  {
    Indexnum: "7.",
    songName: "Jeene Laga Hoon",
    movieName: "Ramaiya Vastavaiya",
    duration: "03:56",
    filePath:
      "Atif Aslam/Jeene Laga Hoon Ramaiya Vastavaiya/Jeene Laga Hoon Ramaiya Vastavaiya 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Jeene Laga Hoon Ramaiya Vastavaiya/Jeene-Laga-Hoon-Ramaiya-Vastavaiya-500-500.jpg",
  },
  {
    Indexnum: "8.",
    songName: "Main Rang Sharbaton Ka",
    movieName: "Phata Poster Nikhla Hero",
    duration: "04:23",
    filePath:
      "Atif Aslam/Main Rang Sharbaton Ka Phata Poster Nikhla Hero/Main Rang Sharbaton Ka Phata Poster Nikhla Hero 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Main Rang Sharbaton Ka Phata Poster Nikhla Hero/Main-Rang-Sharbaton-Ka-Phata-Poster-Nikhla-Hero-500-500.jpg",
  },
  {
    Indexnum: "9.",
    songName: "O Saathi",
    movieName: "Baaghi 2",
    duration: "04:11",
    filePath: "Atif Aslam/O Saathi Baaghi 2/O Saathi Baaghi 2 320 Kbps.mp3",
    coverPath: "Atif Aslam/O Saathi Baaghi 2/O-Saathi-Baaghi-2-500-500.jpg",
  },
  {
    Indexnum: "10.",
    songName: "Paniyon Sa",
    movieName: "Satyameva Jayate",
    duration: "03:56",
    filePath:
      "Atif Aslam/Paniyon Sa Satyameva Jayate/Paniyon Sa Satyameva Jayate 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Paniyon Sa Satyameva Jayate/Paniyon-Sa-Satyameva-Jayate-500-500.jpg",
  },
  {
    Indexnum: "11.",
    songName: "Pehli Nazar Mein",
    movieName: "Race",
    duration: "05:13",
    filePath:
      "Atif Aslam/Pehli Nazar Mein Race/Pehli Nazar Mein Race 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Pehli Nazar Mein Race/Pehli-Nazar-Mein-Race-500-500.jpg",
  },
  {
    Indexnum: "12.",
    songName: "Tera Hone Laga Hoon",
    movieName: "Ajab Prem Ki Ghazab Kahani",
    duration: "05:00",
    filePath:
      "Atif Aslam/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani/Tera-Hone-Laga-Hoon-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
  },
  {
    Indexnum: "13.",
    songName: "Tera Hua",
    movieName: "Loveyatri A Journey Of Love",
    duration: "03:34",
    filePath:
      "Atif Aslam/Tera Hua Loveyatri A Journey Of Love/Tera Hua Loveyatri A Journey Of Love 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tera Hua Loveyatri A Journey Of Love/Tera-Hua-Loveyatri---A-Journey-Of-Love-500-500.jpg",
  },
  {
    Indexnum: "14.",
    songName: "Tere Liye",
    movieName: "Prince",
    duration: "04:39",
    filePath: "Atif Aslam/Tere Liye Prince/Tere Liye Prince 320 Kbps.mp3",
    coverPath: "Atif Aslam/Tere Liye Prince/Tere-Liye-Prince-500-500.jpg",
  },
  {
    Indexnum: "15.",
    songName: "Tere Sang Yaara",
    movieName: "Rustom",
    duration: "04:50",
    filePath:
      "Atif Aslam/Tere Sang Yaara Rustom/Tere Sang Yaara Rustom 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tere Sang Yaara Rustom/Tere-Sang-Yaara-Rustom-500-500.jpg",
  },
  {
    Indexnum: "16.",
    songName: "Tu Chahiye",
    movieName: "Bajrangi Bhaijaan",
    duration: "04:32",
    filePath:
      "Atif Aslam/Tu Chahiye Bajrangi Bhaijaan/Tu Chahiye Bajrangi Bhaijaan 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tu Chahiye Bajrangi Bhaijaan/Tu-Chahiye-Bajrangi-Bhaijaan-500-500.jpg",
  },
  {
    Indexnum: "17.",
    songName: "Tu Jo Mila",
    movieName: "Bajarangi Bhaijaan",
    duration: "04:02",
    filePath: "Atif Aslam/Tu Jo Mila/Tu Jo Mila.mp3",
    coverPath: "Atif Aslam/Tu Jo Mila/Tu Jo Mila.jpg",
  },
  {
    Indexnum: "18.",
    songName: "Tu Jaane Na",
    movieName: "Ajab Prem Ki Ghazab Kahani",
    duration: "05:41",
    filePath:
      "Atif Aslam/Tu Jaane Na Ajab Prem Ki Ghazab Kahani/Tu Jaane Na Ajab Prem Ki Ghazab Kahani 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tu Jaane Na Ajab Prem Ki Ghazab Kahani/Tu-Jaane-Na-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
  },
  {
    Indexnum: "19.",
    songName: "Woh Lamhe",
    movieName: "Zeher",
    duration: "05:20",
    filePath: "Atif Aslam/Woh Lamhe Zeher/Woh Lamhe Zeher 320 Kbps.mp3",
    coverPath: "Atif Aslam/Woh Lamhe Zeher/woh-lamhe-zeher-500-500.jpg",
  },
];
mainplaybutton.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mainplaybutton.classList.remove("fa-circle-play");
    firstPlayButton.classList.remove("fa-circle-play");
    mainplaybutton.classList.add("fa-circle-pause");
    firstPlayButton.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    mainplaybutton.classList.remove("fa-circle-pause");
    mainplaybutton.classList.add("fa-circle-play");
    firstPlayButton.classList.remove("fa-circle-pause");
    firstPlayButton.classList.add("fa-circle-play");
  }
});
firstPlayButton.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mainplaybutton.classList.remove("fa-circle-play");
    firstPlayButton.classList.remove("fa-circle-play");
    mainplaybutton.classList.add("fa-circle-pause");
    firstPlayButton.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    mainplaybutton.classList.remove("fa-circle-pause");
    mainplaybutton.classList.add("fa-circle-play");
    firstPlayButton.classList.remove("fa-circle-pause");
    firstPlayButton.classList.add("fa-circle-play");
  }
});
audioElement.addEventListener("timeupdate", () => {
  songtime.value = (audioElement.currentTime / audioElement.duration) * 100;
});
songtime.addEventListener("input", (event) => {
  audioElement.currentTime = (songtime.value / 100) * audioElement.duration;
});

songItems.forEach((element, i) => {
  element.getElementsByClassName("notation")[0].innerText = songs[i].Indexnum;
  element.getElementsByClassName("songImg")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("movieName")[0].innerText = songs[i].movieName;
  element.getElementsByClassName("time-stamp")[0].innerText = songs[i].duration;
});
Array.from(document.getElementsByClassName("songName")).forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.className);
    Index = parseInt(e.target.id);
    audioElement.src = songs[Index].filePath;

    audioElement.play();
    mainplaybutton.classList.remove("fa-circle-play");
    mainplaybutton.classList.add("fa-circle-pause");
    firstPlayButton.classList.remove("fa-circle-play");
    firstPlayButton.classList.add("fa-circle-pause");
    document.getElementById("songBannerImg").src = songs[Index].coverPath;
    document.getElementById("masterPlayBanner").src = songs[Index].coverPath;
    document.getElementById("masterPlayName").innerText = songs[Index].songName;
    document.getElementById("masterPlayMovie").innerText =
      songs[Index].movieName;
    currenttime();
    document.getElementById("TotalTime").innerText = songs[Index].duration;
  });
});

volumeControl.addEventListener("input", () => {
  const volume = volumeControl.value;
  audioElement.volume = volume;
  if (audioElement.volume <= 0) {
    volumebutton.classList.remove("fa-volume-low");
    volumebutton.classList.remove("fa-volume-high");
    volumebutton.classList.add("fa-volume-xmark");
  } else if (audioElement.volume >= 0 && audioElement.volume <= 0.5) {
    volumebutton.classList.remove("fa-volume-high");
    volumebutton.classList.remove("fa-volume-xmark");
    volumebutton.classList.add("fa-volume-low");
  } else {
    volumebutton.classList.remove("fa-volume-xmark");
    volumebutton.classList.remove("fa-volume-low");
    volumebutton.classList.add("fa-volume-high");
  }
});
document.addEventListener("click", (e) => {
  if (e.target.className == "like-icon") {
    if (e.target.getAttribute("src") == "like-transp.png") {
      e.target.setAttribute("src", "like-green.png");
    } else {
      e.target.setAttribute("src", "like-transp.png");
    }
  }
});
