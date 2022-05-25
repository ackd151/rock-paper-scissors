import React from "react";
import logo from "../assets/logo.svg";

import "../styles/Header.css";

const Header = ({ score }) => {
  return (
    <div className='header'>
      <img src={logo} alt='Rock Paper Scissors' className='logo' />
      <div className='score-card'>
        <div className='score-label'>score</div>
        <div className='score' id='score'>
          {score}
        </div>
      </div>
    </div>
  );
};

export default Header;
