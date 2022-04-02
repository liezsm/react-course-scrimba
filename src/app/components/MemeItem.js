import React from "react";

import meme from "../img/meme.png";
export const MemeItem = (props) => {
  return (
    <section className='meme'>
      <img src={meme} alt='meme' />
      <p className='top'>{props.meme.top}</p>
      <p className='bottom'>{props.meme.bottom}</p>
    </section>
  );
};
