import React from "react";
import Button from "./Button";

import email from "../img/Mail.png";
import ln from "../img/linkedin.png";
const CardInfo = () => {
  return (
    <div className='card-info'>
      <h1 className='name'>Laura Smith</h1>
      <h2 className='position'>Frontend Developer</h2>
      <div className='website'>laurasmith.website</div>
      <div className='buttons-container'>
        <Button icon={email} text='Email' color='#374151' bg='#fff' />
        <Button icon={ln} text='LinkedIn' color='#fff' bg='#5093e2' />
      </div>

      <div className='description'>
        <div className='description-item'>
          <div className='description-title'>About</div>
          <div className='description-content'>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </div>
        </div>

        <div className='description-item'>
          <div className='description-title'>Interests</div>
          <div className='description-content'>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
