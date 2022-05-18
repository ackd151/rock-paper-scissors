import React from "react";

// Game Card Imgs
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";

import "../styles/Card.css";

const Card = ({ card }) => {
  const icons = {
    rock: rock,
    paper: paper,
    scissors: scissors,
    lizard: lizard,
    spock: spock,
  };

  return (
    <div className='card'>
      <img src={icons[card]} alt={card} />
    </div>
  );
};

export default Card;
