import React from "react";
import logo from "../img/react-logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} />
        <h1 className='title'> React Facts</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
