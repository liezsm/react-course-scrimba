import React from "react";
import { Header } from "./app/components/Header";
import { Meme } from "./app/components/Meme";
import { useState } from "react";

import memesData from "./app/memesData";
import meme from "./app/img/meme.png";
function App() {
  const [memeText, setMemeText] = useState({
    top: "",
    bottom: "",
  });

  const [memeImg, setMemeImg] = useState(meme);

  const generateMeme = () => {
    // get the array of memes

    const memes = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const memeUrl = memes[randomNum].url;
    console.log(memeUrl);
    setMemeImg(memeUrl);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMemeText({
      ...memeText,
      [name]: value,
    });
  };
  return (
    <div className='App'>
      <Header />
      <Meme
        generateMeme={generateMeme}
        meme={memeText}
        handleInput={handleChange}
        img={memeImg}
      />
    </div>
  );
}

export default App;
