import React from "react";

import logo from "../img/logo.png";

export default function NavBar() {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo' className='nav_logo' />
    </nav>
  );
}
