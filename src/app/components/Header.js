import React from "react";

import logo from "../img/troll.png";
export const Header = () => {
  return (
    <header>
      <div className='logo-wrapper'>
        <img src={logo} alt='troll face' className='logo_img' />
        <h1>Meme Generator</h1>
      </div>

      <h3>React Course - Project 3</h3>
    </header>
  );
};
