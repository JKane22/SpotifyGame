import { useEffect, useState } from "react";
import "./css/App.css";

import { UilGithub, UilTwitter } from "@iconscout/react-unicons";

function handleClickTwitter() {
  window.location.href = "https://twitter.com/JereKane22";
}

function handleClickGithub() {
  window.location.href = "https://github.com/Jkane22";
}

const song_data = [
  {
    SongName: "Blinding Lights",
    Artist: "The Weeknd",
    Album: "After Hours",
    SongURL:
      "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=d5cd3d276f3d4f7e",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/The_Weeknd_-_Blinding_Lights.png/220px-The_Weeknd_-_Blinding_Lights.png",
    Plays: 3566000000,
  },
  {
    SongName: "Shape of You",
    Artist: "Ed Sheeran",
    Album: "÷",
    SongURL:
      "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3?si=3cb9a527b8294629",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png/220px-Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
    Plays: 3471000000,
  },
  {
    SongName: "Dance Monkey",
    Artist: "Tones and I",
    Album: "The Kids Are Coming",
    SongURL: "https://www.youtube.com/watch?v=v3iwhItMjwA",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Dance_Monkey_by_Tones_and_I.jpg/220px-Dance_Monkey_by_Tones_and_I.jpg",
    Plays: 2813000000,
  },
  {
    SongName: "Someone You Loved",
    Artist: "Lewis Capaldi",
    Album: "Divinely Uninspired to a Hellish Extent",
    SongURL: "https://www.youtube.com/watch?v=xrcMgO2fgpA",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lewis_Capaldi_-_Someone_You_Loved.png/220px-Lewis_Capaldi_-_Someone_You_Loved.png",
    Plays: 2772000000,
  },
  {
    SongName: "Rockstar",
    Artist: "Post Malone",
    Album: "Beerbongs & Bentleys",
    SongURL: "https://www.youtube.com/watch?v=4GFAZBKZVJY",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/PostMaloneRockstar.jpg/220px-PostMaloneRockstar.jpg",
    Plays: 2667000000,
  },
  {
    SongName: "One Dance",
    Artist: "Drake",
    Album: "Views",
    SongURL: "",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DrakeOneDance.png/220px-DrakeOneDance.png",
    Plays: 2625000000,
  },
  {
    SongName: "Stay",
    Artist: "The Kid Laroi",
    Album: "F*ck Love 3: Over You",
    SongURL: "",
    ImageURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
    Plays: 2544000000,
  },
];

function App() {
  let [count, setCount] = useState(0);

  // Images
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);

  // Songs
  const [song1, setSong1] = useState(null);
  const [song2, setSong2] = useState(null);

  function CheckAnswer(song_picked, song1, song2) {
    var pervious_songs = [song1, song2];
    if (song_picked === null) return;

    if (song_picked === 1) {
      if (song1.Plays > song2.Plays) {
        setCount(count + 1);
      } else {
        const element = document.getElementById("song1");
        element.classList.add('shake');
        element.classList.remove('shake');

        if (count > 0) {
          setCount(0);
        }
      }
    } else {
      if (song2.Plays > song1.Plays) {
        setCount(count + 1);
      } else {
        const element = document.getElementById("song2");
        element.classList.add('shake');

        if (count > 0) {
          setCount(0);
        }
      }
    }

    RefreshSongs(pervious_songs);
  }

  async function RefreshSongs(pervious_songs) {
    let Random_Song1 = Math.floor(Math.random() * song_data.length);
    let Random_Song2 = Math.floor(Math.random() * song_data.length);

    // Make sure the Random_Song1 and Random_Song2 are different
    while (Random_Song1 === Random_Song2) {
      Random_Song2 = Math.floor(Math.random() * song_data.length);
    }

    while (pervious_songs.includes(song_data[Random_Song1])) {
      Random_Song1 = Math.floor(Math.random() * song_data.length);
    };

    setSong1(song_data[Random_Song1]);
    setSong2(song_data[Random_Song2]);

    setThumbnail1(song_data[Random_Song1].ImageURL);
    setThumbnail2(song_data[Random_Song2].ImageURL);
  }

  useEffect(() => {
    let Random_Song1 = Math.floor(Math.random() * song_data.length);
    let Random_Song2 = Math.floor(Math.random() * song_data.length);

    // Make sure the Random_Song1 and Random_Song2 are different
    while (Random_Song1 === Random_Song2) {
      Random_Song2 = Math.floor(Math.random() * song_data.length);
    }

    setSong1(song_data[Random_Song1]);
    setSong2(song_data[Random_Song2]);

    setThumbnail1(song_data[Random_Song1].ImageURL);
    setThumbnail2(song_data[Random_Song2].ImageURL);
  }, []);

  return (
    <div className="App bg-stone-800 h-screen">
      <div className="text-center flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png?20160123212544"
          alt="Spotify Logo"
          className="float-right w-20 pt-5"
        />
        <h1 className="pt-10 p-5 text-3xl font-bold text-white">
          Spotify Higher or Lower
        </h1>
      </div>

      {/* Both Songs Img */}
      <h1 className="pt-20 text-5xl font-bold text-white text-center justify-center">
        Current Score: <span className="text-7xl">{count}</span>
      </h1>
      <h1 className="pt-5 text-2xl font-bold text-white text-center justify-center">
        Pick the song that you believe has higher amount of plays then the
        other!
      </h1>
      <div className="flex justify-center pt-20">
        <div onClick={() => CheckAnswer(1, song1, song2)} id="song1">
          <img
            src={thumbnail1}
            alt="Song Thumbnail 1"
            className="rounded-xl mr-10 w-72 hover:scale-125 duration-300 hover:border-2 border-white"
          />
        </div>
        <div onClick={() => CheckAnswer(2, song1, song2)} id="song2">
          <img
            src={thumbnail2}
            alt="Song Thumbnail 2"
            className="rounded-xl ml-10 w-72 hover:scale-125 duration-300 hover:border-2 border-white"
          />
        </div>
      </div>
      <footer className="footer items-center p-5 text-neutral-content absolute bottom-0">
        <div className="items-center grid-flow-col">
          <p>
            Created with ❤️ by: <span className="font-bold">Jkane22</span>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            className="hover:scale-125 duration-200"
            onClick={handleClickTwitter}
          >
            <UilTwitter />
          </a>
          <a
            className="hover:scale-125 duration-200"
            onClick={handleClickGithub}
          >
            <UilGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
