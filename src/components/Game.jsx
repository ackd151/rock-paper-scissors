import React from "react";
import Header from "./Header";
import Board from "./Board";
import "../styles/Game.css";

const Game = ({ base }) => {
  return (
    <div className='app'>
      <Header />
      <Board base={base} />
    </div>
  );
};

export default Game;
