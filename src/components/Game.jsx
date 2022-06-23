import React, { useReducer, useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Result from "./Result";
import "../styles/Game.css";

const initialState = {
  score: 0,
  showResult: false,
  playerPlayed: "",
  aiPlayed: "",
  outcome: 0,
};

const Game = ({ base }) => {
  const reducer = (state, newState) => ({
    ...state,
    score: state.score + newState.outcome,
    playerPlayed: newState.playerCard,
    aiPlayed: newState.aiCard,
    outcome: newState.outcome,
  });

  const [state, setState] = useReducer(reducer, initialState);
  const [showResult, setShowResult] = useState(false);

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
    console.log(card, compCard);
    setState({
      playerCard: cards[card],
      aiCard: cards[compCard],
      outcome: scores[card][compCard],
    });
    setShowResult(true);
    // setPlayerCard(cards[card]);
    // setAiCard(cards[compCard]);
    // setOutcome(scores[card][compCard]);
    // setScore((prev) => prev + outcome);
    // setResult(true);
  };

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <div className='app'>
      <Header score={state.score} />
      {(showResult && (
        <Result
          playerCard={state.playerPlayed}
          aiCard={state.aiPlayed}
          outcome={state.outcome}
          playAgain={handlePlayAgain}
        />
      )) || <Board base={base} playCard={handlePlayedCard} />}
    </div>
  );
};

export default Game;
