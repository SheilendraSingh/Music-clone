let songIndex = 0;
let audioElement = new Audio(
  "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3"
);
let mainplaybutton = document.getElementById("mainplaybutton");
let songtime = document.getElementById("songtime");
let volumeControl = document.getElementById("volume");
let songs = [
  {
    songName: "Aasan Nahin Yahan",
    movieName: "Ashiqui 2",
    duration: "03:34",
    filePath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Aasan Nahin Yahan Aashiqui 2 320 Kbps/Aasan-Nahin-Yahan-Aashiqui-2-500-500.jpg",
  },
  {
    songName: "Ae Dil Hai Mushkil",
    movieName: "Ae Dil Hai Mushkil",
    duration: "04:29",
    filePath:
      "Arijit-singh/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500/Ae Dil Hai Mushkil Title Track Pritam 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500.jpg",
  },
  {
    songName: "Baatein Ye Kabhi Na-Male",
    movieName: "Khamoshiyan",
    duration: "04:49",
    filePath:
      "Arijit-singh/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500/Baatein Ye Kabhi Na Male Khamoshiyan 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500/Baatein-Ye-Kabhi-Na-Male-Khamoshiyan-500-500.jpg",
  },
  {
    songName: "Chahu Main Ya Naa",
    movieName: "Ashiqui 2",
    duration: "05:04",
    filePath:
      "Arijit-singh/Chahun Main Ya Naa Aashiqui 2 320 Kbps/Chahun Main Ya Naa Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Chahun Main Ya Naa Aashiqui 2 320 Kbps/Chahun-Main-Ya-Naa-Aashiqui-2-500-500.jpg",
  },
  {
    songName: "Dil Chiz Tujhe Dedi",
    movieName: "Aitlift",
    duration: "04:31",
    filePath:
      "Arijit-singh/Dil Cheez Tujhe Dedi Airlift 320 Kbps/Dil Cheez Tujhe Dedi Airlift 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Dil Cheez Tujhe Dedi Airlift 320 Kbps/Dil-Cheez-Tujhe-Dedi-Airlift-500-500.jpg",
  },
  {
    songName: "Dilliwali Girlfriend",
    movieName: "Yeh Jawani Hai Diwani",
    duration: "04:20",
    filePath:
      "Arijit-singh/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Dilliwaali Girlfriend Yeh Jawaani Hai Deewani 320 Kbps/Dilliwaali-Girlfriend-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
  },
  {
    songName: "Ghungroo",
    movieName: "War",
    duration: "05:02",
    filePath: "Arijit-singh/Ghungroo War 320 Kbps/Ghungroo War 320 Kbps.mp3",
    coverPath: "Arijit-singh/Ghungroo War 320 Kbps/Ghungroo-War-500-500.jpg",
  },
  {
    songName: "Girl I Need You",
    movieName: "Baaghi",
    duration: "04:57",
    filePath:
      "Arijit-singh/Girl I Need You Baaghi 320 Kbps/Girl I Need You Baaghi 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Girl I Need You Baaghi 320 Kbps/Girl-I-Need-You-Baaghi-500-500.jpg",
  },
  {
    songName: "Haan Main Galat",
    movieName: "Love Aaj Kal",
    duration: "03:38",
    filePath:
      "Arijit-singh/Haan Main Galat Love Aaj Kal 320 Kbps/Haan Main Galat Love Aaj Kal 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Haan Main Galat Love Aaj Kal 320 Kbps/Haan-Main-Galat-Love-Aaj-Kal-500-500.jpg",
  },
  {
    songName: "Ik Vaari Aa",
    movieName: "Raabta",
    duration: "04:34",
    filePath:
      "Arijit-singh/Ik Vaari Aa Raabta 320 Kbps/Ik Vaari Aa Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ik Vaari Aa Raabta 320 Kbps/Ik-Vaari-Aa-Raabta-500-500.jpg",
  },
  {
    songName: "Ilahi",
    movieName: "Yeh Jawaani Hai Deewani",
    duration: "03:49",
    filePath:
      "Arijit-singh/Ilahi Yeh Jawaani Hai Deewani 320 Kbps/Ilahi Yeh Jawaani Hai Deewani 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Ilahi Yeh Jawaani Hai Deewani 320 Kbps/Ilahi-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
  },
  {
    songName: "Janam Janam",
    movieName: "Dilwale",
    duration: "03:57",
    filePath:
      "Arijit-singh/Janam Janam Dilwale 320 Kbps/Janam Janam Dilwale 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Janam Janam Dilwale 320 Kbps/Janam-Janam-Dilwale-Original-Motion-Picture-Soundtrack-500-500.jpg",
  },
  {
    songName: "Kabhi Jo Baadal Barse",
    movieName: "Jackpot",
    duration: "04:14",
    filePath:
      "Arijit-singh/Kabhi Jo Baadal Barse Jackpot 320 Kbps/Kabhi Jo Baadal Barse Jackpot 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Kabhi Jo Baadal Barse Jackpot 320 Kbps/Kabhi-Jo-Baadal-Barse-Jackpot-500-500.jpg",
  },
  {
    songName: "Kashmir Main, Tu Kanyakumari",
    movieName: "Chennai Express",
    duration: "05:07",
    filePath:
      "Arijit-singh/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Kashmir Main, Tu Kanyakumari Chennai Express 320 Kbps/Kashmir-Main,-Tu-Kanyakumari-Chennai-Express-500-500.jpg",
  },
  {
    songName: "Khairiyat",
    movieName: "Chhichhore",
    duration: "04:30",
    filePath:
      "Arijit-singh/Khairiyat (bonus Track) Chhichhore 320 Kbps/Khairiyat (bonus Track) Chhichhore 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Khairiyat (bonus Track) Chhichhore 320 Kbps/Khairiyat-(Bonus-Track)-Chhichhore-500-500.jpg",
  },
  {
    songName: "Khamoshiyan",
    movieName: "Khamoshiyan",
    duration: "05:35",
    filePath:
      "Arijit-singh/Khamoshiyan Jeet Gannguli 320 Kbps/Khamoshiyan Jeet Gannguli 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Khamoshiyan Jeet Gannguli 320 Kbps/Khamoshiyan-Jeet-Gannguli-500-500.jpg",
  },
  {
    songName: "Lambiyaan Si Judaiyaan",
    movieName: "Raabta",
    duration: "03:58",
    filePath:
      "Arijit-singh/Lambiyaan Si Judaiyaan Raabta 320 Kbps/Lambiyaan Si Judaiyaan Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Lambiyaan Si Judaiyaan Raabta 320 Kbps/Lambiyaan-Si-Judaiyaan-Raabta-500-500.jpg",
  },
  {
    songName: "Main Tera Boyfriend",
    movieName: "Raabta",
    duration: "04:36",
    filePath:
      "Arijit-singh/Main Tera Boyfriend Raabta 320 Kbps/Main Tera Boyfriend Raabta 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Main Tera Boyfriend Raabta 320 Kbps/Main-Tera-Boyfriend-Raabta-500-500.jpg",
  },
  {
    songName: "Mareez E Ishq",
    movieName: "Zid",
    duration: "04:51",
    filePath:
      "Arijit-singh/Mareez E Ishq Zid 320 Kbps/Mareez E Ishq Zid 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Mareez E Ishq Zid 320 Kbps/Mareez-E-Ishq-Zid-500-500.jpg",
  },
  {
    songName: "Meri Aashiqui",
    movieName: "Ashiqui 2",
    duration: "04:26",
    filePath:
      "Arijit-singh/Meri Aashiqui Aashiqui 2 320 Kbps/Meri Aashiqui Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Meri Aashiqui Aashiqui 2 320 Kbps/Meri-Aashiqui-Aashiqui-2-500-500.jpg",
  },
  {
    songName: "Milne Hai Mujhse Aayi",
    movieName: "Ashiqui 2",
    duration: "04:55",
    filePath:
      "Arijit-singh/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Milne Hai Mujhse Aayi Aashiqui 2 320 Kbps/Milne-Hai-Mujhse-Aayi-Aashiqui-2-500-500.jpg",
  },
  {
    songName: "Nashe Si Chadh Gayi",
    movieName: "Befikre",
    duration: "03:57",
    filePath:
      "Arijit-singh/Nashe Si Chadh Gayi Befikre 320 Kbps/Nashe Si Chadh Gayi Befikre 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Nashe Si Chadh Gayi Befikre 320 Kbps/Nashe-Si-Chadh-Gayi-Befikre-500-500.jpg",
  },
  {
    songName: "Phir Mohabbat",
    movieName: "Murder 2",
    duration: "05:30",
    filePath:
      "Arijit-singh/Phir Mohabbat Murder 2 320 Kbps/Phir Mohabbat Murder 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Phir Mohabbat Murder 2 320 Kbps/Phir-Mohabbat-Murder-2-500-500.jpg",
  },
  {
    songName: "Pyaar Hota Kayi Baar Hai",
    movieName: "Tu Jhoothi Main Makkaar",
    duration: "03:36",
    filePath:
      "Arijit-singh/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar 320 Kbps/pyaar-hota-kayi-baar-hai-tu-jhoothi-main-makkaar-500-500.jpg",
  },
  {
    songName: "Kehte Hain Khuda Ne",
    movieName: "Agent Vinod",
    duration: "04:50",
    filePath:
      "Arijit-singh/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Raabta Kehte Hain Khuda Ne Agent Vinod 320 Kbps/Raabta-Kehte-Hain-Khuda-Ne-Agent-Vinod-500-500.jpg",
  },
  {
    songName: "Raat Bhar",
    movieName: "Heropanti",
    duration: "05:25",
    filePath:
      "Arijit-singh/Raat Bhar Heropanti 320 Kbps/Raat Bhar Heropanti 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Raat Bhar Heropanti 320 Kbps/Raat-Bhar-Heropanti-500-500.jpg",
  },
  {
    songName: "Saanson Ko",
    movieName: "Zid",
    duration: "04:48",
    filePath:
      "Arijit-singh/Saanson Ko Zid 320 Kbps/Saanson Ko Zid 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Saanson Ko Zid 320 Kbps/Saanson-Ko-Zid-500-500.jpg",
  },
  {
    songName: "Sooraj Dooba Hain",
    movieName: "Roy",
    duration: "04:24",
    filePath:
      "Arijit-singh/Sooraj Dooba Hain Roy 320 Kbps/Sooraj Dooba Hain Roy 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Sooraj Dooba Hain Roy 320 Kbps/Sooraj-Dooba-Hain-Roy-500-500.jpg",
  },
  {
    songName: "Tera Fitoor",
    movieName: "Genius",
    duration: "05:10",
    filePath:
      "Arijit-singh/Tera Fitoor Genius 320 Kbps/Tera Fitoor Genius 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tera Fitoor Genius 320 Kbps/Tera-Fitoor-Genius-500-500.jpg",
  },
  {
    songName: "Tera Yaar Hoon Main",
    movieName: "Sonu Ke Titu Ki Sweety",
    duration: "04:24",
    filePath:
      "Arijit-singh/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 320 Kbps/Tera-Yaar-Hoon-Main-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
  },
  {
    songName: "Teri Meri Kahaani",
    movieName: "Gabbar Is Back",
    duration: "05:31",
    filePath:
      "Arijit-singh/Teri Meri Kahaani Gabbar Is Back 320 Kbps/Teri Meri Kahaani Gabbar Is Back 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Teri Meri Kahaani Gabbar Is Back 320 Kbps/Teri-Meri-Kahaani-Gabbar-Is-Back-500-500.jpg",
  },
  {
    songName: "Tu Har Lamha",
    movieName: "Khamoshiyan",
    duration: "04:32",
    filePath:
      "Arijit-singh/Tu Har Lamha Khamoshiyan 320 Kbps/Tu Har Lamha Khamoshiyan 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tu Har Lamha Khamoshiyan 320 Kbps/Tu-Har-Lamha-Khamoshiyan-500-500.jpg",
  },
  {
    songName: "Tujhe Kitna Chahne Lage",
    movieName: "Kabir Singh",
    duration: "04:44",
    filePath:
      "Arijit-singh/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tujhe Kitna Chahne Lage Kabir Singh 320 Kbps/Tujhe-Kitna-Chahne-Lage-Kabir-Singh-500-500.jpg",
  },
  {
    songName: "Tukur Tukur",
    movieName: "Dilwale",
    duration: "04:07",
    filePath:
      "Arijit-singh/Tukur Tukur Dilwale 320 Kbps/Tukur Tukur Dilwale 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tukur Tukur Dilwale 320 Kbps/Tukur-Tukur-Dilwale-Original-Motion-Picture-Soundtrack-500-500.jpg",
  },
  {
    songName: "Tum Hi Ho",
    movieName: "Ashiqui 2",
    duration: "04:22",
    filePath:
      "Arijit-singh/Tum Hi Ho Aashiqui 2 320 Kbps/Tum Hi Ho Aashiqui 2 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Tum Hi Ho Aashiqui 2 320 Kbps/Tum-Hi-Ho-Aashiqui-2-500-500.jpg",
  },
  {
    songName: "Uska Hi Banana",
    movieName: "1920 Evil Returns",
    duration: "05:27",
    filePath:
      "Arijit-singh/Uska Hi Banana 1920 Evil Returns 320 Kbps/Uska Hi Banana 1920 Evil Returns 320 Kbps.mp3",
    coverPath:
      "Arijit-singh/Uska Hi Banana 1920 Evil Returns 320 Kbps/Uska-Hi-Banana-1920-Evil-Returns-500-500.jpg",
  },
  {
    songName: "12 Bajay",
    movieName: "12 Bajay",
    duration: "06:17",
    filePath: "Atif Aslam/12 Bajay Atif Aslam/12 Bajay Atif Aslam 320 Kbps.mp3",
    coverPath: "Atif Aslam/12 Bajay Atif Aslam/12-Bajay-Atif-Aslam-500-500.jpg",
  },
  {
    songName: "Allah Duhai Hai",
    movieName: "Race 2",
    duration: "04:15",
    filePath:
      "Atif Aslam/Allah Duhai Hai Race 2/Allah Duhai Hai Race 2 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Allah Duhai Hai Race 2/Allah-Duhai-Hai-Race-2-500-500.jpg",
  },
  {
    songName: "Be Intehaan",
    movieName: "Race 2",
    duration: "04:50",
    filePath: "Atif Aslam/Be Intehaan Race 2/Be Intehaan Race 2 320 Kbps.mp3",
    coverPath: "Atif Aslam/Be Intehaan Race 2/Be-Intehaan-Race-2-500-500.jpg",
  },
  {
    songName: "Dil Diyan Gallan",
    movieName: "Tiger Zinda Hai",
    duration: "04:20",
    filePath:
      "Atif Aslam/Dil Diyan Gallan Tiger Zinda Hai/Dil Diyan Gallan Tiger Zinda Hai 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Dil Diyan Gallan Tiger Zinda Hai/Dil-Diyan-Gallan-Tiger-Zinda-Hai-500-500.jpg",
  },
  {
    songName: "Dil Meri Na Sune",
    movieName: "Geniust",
    duration: "03:56",
    filePath:
      "Atif Aslam/Dil Meri Na Sune Genius/Dil Meri Na Sune Genius 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Dil Meri Na Sune Genius/Dil-Meri-Na-Sune-Genius-500-500.jpg",
  },
  {
    songName: "Jeena Jeena",
    movieName: "Badlapur",
    duration: "03:49",
    filePath:
      "Atif Aslam/Jeena Jeena Badlapur/Jeena Jeena Badlapur 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Jeena Jeena Badlapur/Jeena-Jeena-Badlapur-500-500.jpg",
  },
  {
    songName: "Jeene Laga Hoon",
    movieName: "Ramaiya Vastavaiya",
    duration: "03:56",
    filePath:
      "Atif Aslam/Jeene Laga Hoon Ramaiya Vastavaiya/Jeene Laga Hoon Ramaiya Vastavaiya 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Jeene Laga Hoon Ramaiya Vastavaiya/Jeene-Laga-Hoon-Ramaiya-Vastavaiya-500-500.jpg",
  },
  {
    songName: "Main Rang Sharbaton Ka",
    movieName: "Phata Poster Nikhla Hero",
    duration: "04:23",
    filePath:
      "Atif Aslam/Main Rang Sharbaton Ka Phata Poster Nikhla Hero/Main Rang Sharbaton Ka Phata Poster Nikhla Hero 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Main Rang Sharbaton Ka Phata Poster Nikhla Hero/Main-Rang-Sharbaton-Ka-Phata-Poster-Nikhla-Hero-500-500.jpg",
  },
  {
    songName: "O Saathi",
    movieName: "Baaghi 2",
    duration: "04:11",
    filePath: "Atif Aslam/O Saathi Baaghi 2/O Saathi Baaghi 2 320 Kbps.mp3",
    coverPath: "Atif Aslam/O Saathi Baaghi 2/O-Saathi-Baaghi-2-500-500.jpg",
  },
  {
    songName: "Paniyon Sa",
    movieName: "Satyameva Jayate",
    duration: "03:56",
    filePath:
      "Atif Aslam/Paniyon Sa Satyameva Jayate/Paniyon Sa Satyameva Jayate 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Paniyon Sa Satyameva Jayate/Paniyon-Sa-Satyameva-Jayate-500-500.jpg",
  },
  {
    songName: "Pehli Nazar Mein",
    movieName: "Race",
    duration: "05:13",
    filePath:
      "Atif Aslam/Pehli Nazar Mein Race/Pehli Nazar Mein Race 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Pehli Nazar Mein Race/Pehli-Nazar-Mein-Race-500-500.jpg",
  },
  {
    songName: "Tera Hone Laga Hoon",
    movieName: "Ajab Prem Ki Ghazab Kahani",
    duration: "05:00",
    filePath:
      "Atif Aslam/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tera Hone Laga Hoon Ajab Prem Ki Ghazab Kahani/Tera-Hone-Laga-Hoon-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
  },
  {
    songName: "Tera Hua",
    movieName: "Loveyatri A Journey Of Love",
    duration: "03:34",
    filePath:
      "Atif Aslam/Tera Hua Loveyatri A Journey Of Love/Tera Hua Loveyatri A Journey Of Love 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tera Hua Loveyatri A Journey Of Love/Tera-Hua-Loveyatri---A-Journey-Of-Love-500-500.jpg",
  },
  {
    songName: "Tere Liye",
    movieName: "Prince",
    duration: "04:39",
    filePath: "Atif Aslam/Tere Liye Prince/Tere Liye Prince 320 Kbps.mp3",
    coverPath: "Atif Aslam/Tere Liye Prince/Tere-Liye-Prince-500-500.jpg",
  },
  {
    songName: "Tere Sang Yaara",
    movieName: "Rustom",
    duration: "04:50",
    filePath:
      "Atif Aslam/Tere Sang Yaara Rustom/Tere Sang Yaara Rustom 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tere Sang Yaara Rustom/Tere-Sang-Yaara-Rustom-500-500.jpg",
  },
  {
    songName: "Tu Chahiye",
    movieName: "Bajrangi Bhaijaan",
    duration: "04:32",
    filePath:
      "Atif Aslam/Tu Chahiye Bajrangi Bhaijaan/Tu Chahiye Bajrangi Bhaijaan 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tu Chahiye Bajrangi Bhaijaan/Tu-Chahiye-Bajrangi-Bhaijaan-500-500.jpg",
  },
  {
    songName: "Tu Jo Mila",
    movieName: "Bajarangi Bhaijaan",
    duration: "04:02",
    filePath: "Atif Aslam/Tu Jo Mila/Tu Jo Mila.mp3",
    coverPath: "Atif Aslam/Tu Jo Mila/Tu Jo Mila.jpg",
  },
  {
    songName: "Tu Jaane Na",
    movieName: "Ajab Prem Ki Ghazab Kahani",
    duration: "05:41",
    filePath:
      "Atif Aslam/Tu Jaane Na Ajab Prem Ki Ghazab Kahani/Tu Jaane Na Ajab Prem Ki Ghazab Kahani 320 Kbps.mp3",
    coverPath:
      "Atif Aslam/Tu Jaane Na Ajab Prem Ki Ghazab Kahani/Tu-Jaane-Na-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
  },
  {
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
let numberList = [];
for (i = 0; i < songs.length; i++) {
  numberList.push(i);
}
if (numberList.length > 0) {
  let randomNumber =
    numberList[Math.floor(Math.random() * (numberList.length - 1))];
}
document.addEventListener("click", (e) => {
  if (e.target.id == "nextplaybutton" || e.target.id == "preplaybutton") {
    audioElement.src = songs[randomNumber].filePath;
    audioElement.play();
    mainplaybutton.classList.remove("fa-circle-play");
    mainplaybutton.classList.add("fa-circle-pause");
    firstPlayButton.classList.remove("fa-circle-play");
    firstPlayButton.classList.add("fa-circle-pause");
    document.getElementById("songBannerImg").src =
      songs[randomNumber].coverPath;
    document.getElementById("masterPlayBanner").src =
      songs[randomNumber].coverPath;
    document.getElementById("masterPlayName").innerText =
      songs[randomNumber].songName;
    document.getElementById("masterPlayMovie").innerText =
      songs[randomNumber].movieName;
    document.getElementById("TotalTime").innerText =
      songs[randomNumber].duration;
  }
});
