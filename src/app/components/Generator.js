import React from "react";

import logo from "../img/generator.png";

export const Generator = ({
  handleChange,
  meme: { top, bottom },
  generateMeme,
}) => {
  return (
    <section className='generator'>
      <input
        type='text'
        className='meme_text'
        placeholder='Top text..'
        name='top'
        onChange={(e) => handleChange(e)}
        value={top}
      />
      <input
        type='text'
        className='meme_text'
        placeholder='Bottom text..'
        name='bottom'
        onChange={(e) => handleChange(e)}
        value={bottom}
      />
      <button
        type='submit'
        className='generate-btn'
        onClick={() => generateMeme()}
      >
        <img src={logo} alt='' />
      </button>
    </section>
  );
};
