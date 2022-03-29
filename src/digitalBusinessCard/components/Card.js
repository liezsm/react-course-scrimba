import React from "react";

import CardInfo from "./CardInfo";
import Social from "./Social";
import pic from "../img/Rectangle 90.png";
const Card = () => {
  return (
    <main>
      <div className='card'>
        <img src={pic} alt='profile photo' className='profile' />

        <CardInfo />
        <Social />
      </div>
    </main>
  );
};

export default Card;
