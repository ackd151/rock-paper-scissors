import React from "react";

// Game Card Imgs
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";

import "../styles/Card.css";

const Card = ({ card, playCard }) => {
  const icons = {
    rock: rock,
    paper: paper,
    scissors: scissors,
    lizard: lizard,
    spock: spock,
  };
  const cardInt = {
    rock: 0,
    paper: 1,
    scissors: 2,
  };

  return (
    <div className='card-wrap' onClick={() => playCard(cardInt[card])}>
      <div className={`card ${card}`}>
        <img src={icons[card]} alt={card} className='card-inset' />
      </div>
    </div>
  );
};

export default Card;
