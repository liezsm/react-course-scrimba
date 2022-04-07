import React, { useEffect } from "react";
import { Header } from "./app/components/Header";
import { Meme } from "./app/components/Meme";
import { useState } from "react";

import memeImg from "./app/img/meme.png";

function App() {
  const [meme, setMeme] = useState({
    top: "",
    bottom: "",
    img: memeImg,
  });

  const [allMemes, setAllMemes] = useState([]);

  const generateMeme = () => {
    // get the array of memes

    const randomNum = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[randomNum].url;

    setMeme((prev) => {
      return { ...prev, img: memeUrl };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // useEffect

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Meme
        generateMeme={generateMeme}
        meme={meme}
        handleInput={handleChange}
      />
    </div>
  );
}

export default App;
