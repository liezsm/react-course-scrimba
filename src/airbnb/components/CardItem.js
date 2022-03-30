import React from "react";

import star from "../img/star.png";

export default function CardItem({
  data: { img, button, rate, place, title, amt },
}) {
  const style = {
    display: button ? "block" : "none",
  };
  return (
    <article className='card_item'>
      <div className='card_img'>
        <img src={img} alt='' className='card_img-photo' />

        <a href='#' className='card_img_tag' style={style}>
          {button}
        </a>
      </div>

      <div className='card_desc'>
        <div className='card_desc_rating'>
          <img src={star} alt='' />
          <p className='card_desc_rating_rate'>
            {rate}
            <span id='place'> {place}</span>
          </p>
        </div>
        <p className='card_desc_rating_title'>{title}</p>
        <div className='card_desc_rating_amt'>
          <span id='amount'>{amt}</span> person
        </div>
      </div>
    </article>
  );
}
