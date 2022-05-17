import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        <div className='title-comp'>rock</div>
        <div className='title-comp'>paper</div>
        <div className='title-comp'>scissors</div>
      </div>
      <div className='score-card'>
        <div className='score-label'>score</div>
        <div className='score' id='score'>
          12
        </div>
      </div>
    </div>
  );
};

export default Header;
