import React from "react";

export const MemeItem = ({ meme }) => {
  return (
    <section className='meme'>
      <img src={meme.img} alt='meme' />
      <p className='top'>{meme.top}</p>
      <p className='bottom'>{meme.bottom}</p>
    </section>
  );
};
