import React from "react";

import swim from "../img/swimmer.png";
import wed from "../img/wedding-photography.png";
import bike from "../img/mountain-bike.png";

import CardItem from "./CardItem";
export default function Cards() {
  const items = [
    {
      img: swim,
      button: "SOLD OUT",
      rate: "5.0",
      place: "(6) USA",
      title: "Life lessons with Katie Zaferes",
      amt: "From $136 / ",
    },
    {
      img: wed,
      button: "ONLINE",
      rate: "5.0",
      place: "(30) USA",
      title: "Learn wedding photography",
      amt: "From $125 / ",
    },
    {
      img: bike,
      button: "",
      rate: "4.8",
      place: "(2) USA",
      title: "Group Mountain Biking",
      amt: "From $50/",
    },
  ];
  return (
    <section className='cards'>
      {items.map((i, index) => (
        <CardItem key={index} data={i} />
      ))}
    </section>
  );
}
