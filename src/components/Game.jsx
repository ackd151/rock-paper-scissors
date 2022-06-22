import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Result from "./Result";
import "../styles/Game.css";

const Game = ({ base }) => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [playerCard, setPlayerCard] = useState("");
  const [aiCard, setAiCard] = useState("");
  const [outcome, setOutcome] = useState(0);

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
    setPlayerCard(cards[card]);
    const compCard = generateComputerCard();
    setAiCard(cards[compCard]);
    setOutcome(scores[card][compCard]);
    setScore((prev) => prev + outcome);
    setResult(true);
  };

  return (
    <div className='app'>
      <Header score={score} />
      {(result && (
        <Result
          playerCard={playerCard}
          aiCard={aiCard}
          outcome={outcome}
          playAgain={() => {
            setResult(false);
          }}
        />
      )) || <Board base={base} playCard={handlePlayedCard} />}
    </div>
  );
};

export default Game;
