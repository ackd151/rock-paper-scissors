import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import "../styles/Game.css";

const Game = ({ base }) => {
  const [score, setScore] = useState(0);

  const cards = base
    ? ["rock", "paper", "scissors"]
    : ["rock", "paper", "scissors", "lizard", "spock"];

  const generateComputerCard = () => {
    return Math.floor(Math.random() * cards.length);
  };

  const scores = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];

  const handlePlayedCard = (card) => {
    const compCard = generateComputerCard();
    console.log("Played: ", card);
    console.log(scores[card]);
    console.log(scores[compCard]);
    // console.log(roundScore);
    console.log(scores[card][compCard]);
    setScore((prev) => prev + scores[card][compCard]);
  };

  return (
    <div className='app'>
      <Header score={score} />
      <Board base={base} playCard={handlePlayedCard} />
    </div>
  );
};

export default Game;
