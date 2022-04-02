import React from "react";
import { Header } from "./app/components/Header";
import { Meme } from "./app/components/Meme";
import { useState } from "react";

function App() {
  const [memeText, setMemeText] = useState({
    top: "",
    bottom: "",
  });

  const generateMeme = (meme) => {
    // setMemeText(meme);
    console.log("testing");
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
      />
    </div>
  );
}

export default App;
