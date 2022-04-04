import React from "react";

export const MemeItem = (props) => {
  return (
    <section className='meme'>
      <img src={props.img} alt='meme' />
      <p className='top'>{props.meme.top}</p>
      <p className='bottom'>{props.meme.bottom}</p>
    </section>
  );
};
