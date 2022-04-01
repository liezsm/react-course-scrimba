import React from "react";

import icon from "../img/location.png";
const TravelItem = ({ data }) => {
  console.log(data);
  return (
    <section className='travel_item'>
      <img src={data.img} alt={data.spot} className='travel_img' />
      <div className='travel_details'>
        <div className='location'>
          <img src={icon} alt='location' className='icon' />
          <p className='travel_place'>{data.place}</p>
          <a href='#' className='travel_link'>
            View on Google Maps
          </a>
        </div>
        <h1 className='travel_name'>{data.spot}</h1>
        <small className='travel_duration'>
          {data.start}- {data.end}
        </small>
        <p className='travel_desc'>{data.desc}</p>
      </div>
    </section>
  );
};

export default TravelItem;
