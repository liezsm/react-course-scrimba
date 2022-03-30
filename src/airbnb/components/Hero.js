import React from "react";

import hero from "../img/hero.png";
export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero_img'>
        <img src={hero} alt='' />
      </div>
      <div className='hero_descp'>
        <h1 className='hero_descp_title'>Online Experiences</h1>
        <p className='hero_descp_descp'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
