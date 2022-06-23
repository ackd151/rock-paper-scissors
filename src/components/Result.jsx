import React, { useState } from "react";
import Card from "./Card";
import "../styles/Result.css";

const outcomes = ["You Lose", "Tie", "You Win"];

const Result = ({ playerCard, aiCard, playAgain, outcome }) => {
  return (
    <div className='result-section'>
      <div className='results'>
        <div className='played player'>
          {outcome === 1 && <div className='winner'></div>}
          <h2>You Picked</h2>
          <Card card={playerCard} />
        </div>
        <div className='outcome'>
          <div id='outcome'>{outcomes[outcome + 1]}</div>
          <button onClick={playAgain} className='play-btn'>
            Play Again
          </button>
        </div>
        <div className='played ai'>
          {outcome === -1 && <div className='winner'></div>}
          <h2>The House Picked</h2>
          <Card card={aiCard} />
        </div>
      </div>
    </div>
  );
};

export default Result;
