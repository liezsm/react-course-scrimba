import React from "react";

import fb from "../img/Facebook Icon.png";
import gh from "../img/GitHub Icon.png";
import ig from "../img/Instagram Icon.png";
import tw from "../img/Twitter Icon.png";
const Social = () => {
  return (
    <div className='footer'>
      <a href='#'>
        <img src={tw} alt='' />
      </a>

      <a href='#'>
        <img src={fb} alt='' />
      </a>

      <a href='#'>
        <img src={ig} alt='' />
      </a>

      <a href='#'>
        <img src={gh} alt='' />
      </a>
    </div>
  );
};

export default Social;
