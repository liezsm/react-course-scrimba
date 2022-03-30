import React from "react";
import Cards from "./Cards";
import Hero from "./Hero";
import NavBar from "./NavBar";

const AirBnb = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Cards />
      </main>
    </>
  );
};

export default AirBnb;
