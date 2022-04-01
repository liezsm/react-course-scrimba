import React from "react";
import TravelItem from "./TravelItem";

const Travels = ({ data }) => {
  const allTravels = data.map((travel) => (
    <TravelItem data={travel} key={travel.id} />
  ));
  return <main>{allTravels}</main>;
};

export default Travels;
