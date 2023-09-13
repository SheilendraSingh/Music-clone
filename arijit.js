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
    songName: "Aasan Nahin Yahan",
    movieName: "Ashiqui 2",
    duration: "03:34",
    filePath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan-Nahin-Yahan-Aashiqui-2-500-500.jpg",
  },
  {
    Indexnum: "2.",
    songName: "Ae Dil Hai Mushkil",
    movieName: "Ae Dil Hai Mushkil",
    duration: "04:29",
    filePath:
      "Arijit-singh/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500/Ae Dil Hai Mushkil Title Track Pritam 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500.jpg",
  },
  {
    Indexnum: "3.",
    songName: "Baatein Ye Kabhi Na-Male",
    movieName: "Khamoshiyan",
    duration: "04:49",
    filePath:
      "Arijit-singh/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500/Baatein Ye Kabhi Na Male Khamoshiyan 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500.jpg",
  },
  {
    Indexnum: "4.",
    songName: "Chahu Main Ya Naa",
    movieName: "Ashiqui 2",
    duration: "05:04",
    filePath:
      "Arijit-singh/Chahun Main Ya Naa Aashiqui 2 320 Kbps/Chahun Main Ya Naa Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Chahun Main Ya Naa Aashiqui 2 320 Kbps/Chahun-Main-Ya-Naa-Aashiqui-2-500-500.jpg",
  },
  {
    Indexnum: "5.",
    songName: "Dil Chiz Tujhe Dedi",
    movieName: "Aitlift",
    duration: "04:31",
    filePath:
      "Arijit-singh/Dil Cheez Tujhe Dedi Airlift 320 Kbps/Dil Cheez Tujhe Dedi Airlift 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Dil Cheez Tujhe Dedi Airlift 320 Kbps/Dil-Cheez-Tujhe-Dedi-Airlift-500-500.jpg",
  },
  {
    Indexnum: "6.",
    songName: "Dilliwali Girlfriend",
    movieName: "Yeh Jawani Hai Diwani",
    duration: "04:20",
    filePath:
      "Arijit-singh/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps/Dilliwaali-Girlfriend-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
  },
  {
    Indexnum: "7.",
    songName: "Ghungroo",
    movieName: "War",
    duration: "05:02",
    filePath: "Arijit-singh/Ghungroo War 320 Kbps/Ghungroo War 320 Kbps.mp3",
    coverPath: "Arijit-singh/Ghungroo War 320 Kbps/Ghungroo-War-500-500.jpg",
  },
  {
    Indexnum: "8.",
    songName: "Girl I Need You",
    movieName: "Baaghi",
    duration: "04:57",
    filePath:
      "Arijit-singh/Girl I Need You Baaghi 320 Kbps/Girl I Need You Baaghi 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Girl I Need You Baaghi 320 Kbps/Girl-I-Need-You-Baaghi-500-500.jpg",
  },
  {
    Indexnum: "9.",
    songName: "Haan Main Galat",
    movieName: "Love Aaj Kal",
    duration: "03:38",
    filePath:
      "Arijit-singh/Haan Main Galat Love Aaj Kal 320 Kbps/Haan Main Galat Love Aaj Kal 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Haan Main Galat Love Aaj Kal 320 Kbps/Haan-Main-Galat-Love-Aaj-Kal-500-500.jpg",
  },
  {
    Indexnum: "10.",
    songName: "Ik Vaari Aa",
    movieName: "Raabta",
    duration: "04:34",
    filePath:
      "Arijit-singh/Ik Vaari Aa Raabta 320 Kbps/Ik Vaari Aa Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ik Vaari Aa Raabta 320 Kbps/Ik-Vaari-Aa-Raabta-500-500.jpg",
  },
  {
    Indexnum: "11.",
    songName: "Ilahi",
    movieName: "Yeh Jawaani Hai Deewani",
    duration: "03:49",
    filePath:
      "Arijit-singh/Ilahi Yeh Jawaani Hai Deewani 320 Kbps/Ilahi Yeh Jawaani Hai Deewani 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ilahi Yeh Jawaani Hai Deewani 320 Kbps/Ilahi-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
  },
  {
    Indexnum: "12.",
    songName: "Janam Janam",
    movieName: "Dilwale",
    duration: "03:57",
    filePath:
      "Arijit-singh/Janam Janam Dilwale 320 Kbps/Janam Janam Dilwale 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Janam Janam Dilwale 320 Kbps/Janam-Janam-Dilwale-Original-Motion-Picture-Soundtrack-500-500.jpg",
  },
  {
    Indexnum: "13.",
    songName: "Kabhi Jo Baadal Barse",
    movieName: "Jackpot",
    duration: "04:14",
    filePath:
      "Arijit-singh/Kabhi Jo Baadal Barse Jackpot 320 Kbps/Kabhi Jo Baadal Barse Jackpot 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Kabhi Jo Baadal Barse Jackpot 320 Kbps/Kabhi-Jo-Baadal-Barse-Jackpot-500-500.jpg",
  },
  {
    Indexnum: "14.",
    songName: "Kashmir Main, Tu Kanyakumari",
    movieName: "Chennai Express",
    duration: "05:07",
    filePath:
      "Arijit-singh/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps/Kashmir-Main,-Tu-Kanyakumari-Chennai-Express-500-500.jpg",
  },
  {
    Indexnum: "15.",
    songName: "Khairiyat",
    movieName: "Chhichhore",
    duration: "04:30",
    filePath:
      "Arijit-singh/Khairiyat (bonus Track) Chhichhore 320 Kbps/Khairiyat (bonus Track) Chhichhore 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Khairiyat (bonus Track) Chhichhore 320 Kbps/Khairiyat-(Bonus-Track)-Chhichhore-500-500.jpg",
  },
  {
    Indexnum: "16.",
    songName: "Khamoshiyan",
    movieName: "Khamoshiyan",
    duration: "05:35",
    filePath:
      "Arijit-singh/Khamoshiyan Jeet Gannguli 320 Kbps/Khamoshiyan Jeet Gannguli 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Khamoshiyan Jeet Gannguli 320 Kbps/Khamoshiyan-Jeet-Gannguli-500-500.jpg",
  },
  {
    Indexnum: "17.",
    songName: "Lambiyaan Si Judaiyaan",
    movieName: "Raabta",
    duration: "03:58",
    filePath:
      "Arijit-singh/Lambiyaan Si Judaiyaan Raabta 320 Kbps/Lambiyaan Si Judaiyaan Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Lambiyaan Si Judaiyaan Raabta 320 Kbps/Lambiyaan-Si-Judaiyaan-Raabta-500-500.jpg",
  },
  {
    Indexnum: "18.",
    songName: "Main Tera Boyfriend",
    movieName: "Raabta",
    duration: "04:36",
    filePath:
      "Arijit-singh/Main Tera Boyfriend Raabta 320 Kbps/Main Tera Boyfriend Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Main Tera Boyfriend Raabta 320 Kbps/Main-Tera-Boyfriend-Raabta-500-500.jpg",
  },
  {
    Indexnum: "19.",
    songName: "Mareez E Ishq",
    movieName: "Zid",
    duration: "04:51",
    filePath:
      "Arijit-singh/Mareez E Ishq Zid 320 Kbps/Mareez E Ishq Zid 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Mareez E Ishq Zid 320 Kbps/Mareez-E-Ishq-Zid-500-500.jpg",
  },
  {
    Indexnum: "20.",
    songName: "Meri Aashiqui",
    movieName: "Ashiqui 2",
    duration: "04:26",
    filePath:
      "Arijit-singh/Meri Aashiqui Aashiqui 2 320 Kbps/Meri Aashiqui Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Meri Aashiqui Aashiqui 2 320 Kbps/Meri-Aashiqui-Aashiqui-2-500-500.jpg",
  },
  {
    Indexnum: "21.",
    songName: "Milne Hai Mujhse Aayi",
    movieName: "Ashiqui 2",
    duration: "04:55",
    filePath:
      "Arijit-singh/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps/Milne-Hai-Mujhse-Aayi-Aashiqui-2-500-500.jpg",
  },
  {
    Indexnum: "22.",
    songName: "Nashe Si Chadh Gayi",
    movieName: "Befikre",
    duration: "03:57",
    filePath:
      "Arijit-singh/Nashe Si Chadh Gayi Befikre 320 Kbps/Nashe Si Chadh Gayi Befikre 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Nashe Si Chadh Gayi Befikre 320 Kbps/Nashe-Si-Chadh-Gayi-Befikre-500-500.jpg",
  },
  {
    Indexnum: "23.",
    songName: "Phir Mohabbat",
    movieName: "Murder 2",
    duration: "05:30",
    filePath:
      "Arijit-singh/Phir Mohabbat Murder 2 320 Kbps/Phir Mohabbat Murder 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Phir Mohabbat Murder 2 320 Kbps/Phir-Mohabbat-Murder-2-500-500.jpg",
  },
  {
    Indexnum: "24.",
    songName: "Pyaar Hota Kayi Baar Hai",
    movieName: "Tu Jhoothi Main Makkaar",
    duration: "03:36",
    filePath:
      "Arijit-singh/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps/pyaar-hota-kayi-baar-hai-tu-jhoothi-main-makkaar-500-500.jpg",
  },
  {
    Indexnum: "25.",
    songName: "Kehte Hain Khuda Ne",
    movieName: "Agent Vinod",
    duration: "04:50",
    filePath:
      "Arijit-singh/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps/Raabta-Kehte-Hain-Khuda-Ne-Agent-Vinod-500-500.jpg",
  },
  {
    Indexnum: "26.",
    songName: "Raat Bhar",
    movieName: "Heropanti",
    duration: "05:25",
    filePath:
      "Arijit-singh/Raat Bhar Heropanti 320 Kbps/Raat Bhar Heropanti 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Raat Bhar Heropanti 320 Kbps/Raat-Bhar-Heropanti-500-500.jpg",
  },
  {
    Indexnum: "27.",
    songName: "Saanson Ko",
    movieName: "Zid",
    duration: "04:48",
    filePath:
      "Arijit-singh/Saanson Ko Zid 320 Kbps/Saanson Ko Zid 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Saanson Ko Zid 320 Kbps/Saanson-Ko-Zid-500-500.jpg",
  },
  {
    Indexnum: "28.",
    songName: "Sooraj Dooba Hain",
    movieName: "Roy",
    duration: "04:24",
    filePath:
      "Arijit-singh/Sooraj Dooba Hain Roy 320 Kbps/Sooraj Dooba Hain Roy 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Sooraj Dooba Hain Roy 320 Kbps/Sooraj-Dooba-Hain-Roy-500-500.jpg",
  },
  {
    Indexnum: "29.",
    songName: "Tera Fitoor",
    movieName: "Genius",
    duration: "05:10",
    filePath:
      "Arijit-singh/Tera Fitoor Genius 320 Kbps/Tera Fitoor Genius 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tera Fitoor Genius 320 Kbps/Tera-Fitoor-Genius-500-500.jpg",
  },
  {
    Indexnum: "30.",
    songName: "Tera Yaar Hoon Main",
    movieName: "Sonu Ke Titu Ki Sweety",
    duration: "04:24",
    filePath:
      "Arijit-singh/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps/Tera-Yaar-Hoon-Main-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
  },
  {
    Indexnum: "31.",
    songName: "Teri Meri Kahaani",
    movieName: "Gabbar Is Back",
    duration: "05:31",
    filePath:
      "Arijit-singh/Teri Meri Kahaani Gabbar Is Back 320 Kbps/Teri Meri Kahaani Gabbar Is Back 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Teri Meri Kahaani Gabbar Is Back 320 Kbps/Teri-Meri-Kahaani-Gabbar-Is-Back-500-500.jpg",
  },
  {
    Indexnum: "32.",
    songName: "Tu Har Lamha",
    movieName: "Khamoshiyan",
    duration: "04:32",
    filePath:
      "Arijit-singh/Tu Har Lamha Khamoshiyan 320 Kbps/Tu Har Lamha Khamoshiyan 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tu Har Lamha Khamoshiyan 320 Kbps/Tu-Har-Lamha-Khamoshiyan-500-500.jpg",
  },
  {
    Indexnum: "33.",
    songName: "Tujhe Kitna Chahne Lage",
    movieName: "Kabir Singh",
    duration: "04:44",
    filePath:
      "Arijit-singh/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps/Tujhe-Kitna-Chahne-Lage-Kabir-Singh-500-500.jpg",
  },
  {
    Indexnum: "34.",
    songName: "Tukur Tukur",
    movieName: "Dilwale",
    duration: "04:07",
    filePath:
      "Arijit-singh/Tukur Tukur Dilwale 320 Kbps/Tukur Tukur Dilwale 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tukur Tukur Dilwale 320 Kbps/Tukur-Tukur-Dilwale-Original-Motion-Picture-Soundtrack-500-500.jpg",
  },
  {
    Indexnum: "35.",
    songName: "Tum Hi Ho",
    movieName: "Ashiqui 2",
    duration: "04:22",
    filePath:
      "Arijit-singh/Tum Hi Ho Aashiqui 2 320 Kbps/Tum Hi Ho Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tum Hi Ho Aashiqui 2 320 Kbps/Tum-Hi-Ho-Aashiqui-2-500-500.jpg",
  },
  {
    Indexnum: "36.",
    songName: "Uska Hi Banana",
    movieName: "1920 Evil Returns",
    duration: "05:27",
    filePath:
      "Arijit-singh/Uska Hi Banana 1920 Evil Returns 320 Kbps/Uska Hi Banana 1920 Evil Returns 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Uska Hi Banana 1920 Evil Returns 320 Kbps/Uska-Hi-Banana-1920-Evil-Returns-500-500.jpg",
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
