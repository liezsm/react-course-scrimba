import React from "react";

import logo from "../img/icon.png";
const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <p className='header_title'>my travel journal.</p>
    </header>
  );
};

export default Header;
