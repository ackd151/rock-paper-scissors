import React, { useState } from "react";
import Card from "./Card";
import "../styles/Result.css";

const Result = ({ playerCard, aiCard, playAgain, outcome }) => {
  return (
    <div className='base-board'>
      <div className='results'>
        <div className='played player'>
          <h3>You Picked</h3>
          <Card card={playerCard} />
        </div>
        <div className='outcome'>
          <div id='outcome'>{outcome}</div>
          <button onClick={playAgain}>Play Again</button>
        </div>
        <div className='played ai'>
          <h3>The House Picked</h3>
          <Card card={aiCard} />
        </div>
      </div>
    </div>
  );
};

export default Result;
