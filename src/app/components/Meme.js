import React from "react";
import { Generator } from "./Generator";
import { MemeItem } from "./MemeItem";

export const Meme = ({ generateMeme, handleInput, meme, img }) => {
  return (
    <main>
      <Generator
        generateMeme={generateMeme}
        meme={meme}
        handleChange={handleInput}
      />
      <MemeItem meme={meme} img={img} />
    </main>
  );
};
