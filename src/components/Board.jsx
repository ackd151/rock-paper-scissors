import React from "react";
import pentagonBg from "../assets/bg-pentagon.svg";
import triangleBg from "../assets/bg-triangle.svg";
import Card from "./Card";
import "../styles/Board.css";

const Board = ({ base, playCard }) => {
  const backgroundStyle = {
    backgroundImage: `url(${base ? triangleBg : pentagonBg})`,
  };

  return (
    <div
      className={`board ${base ? "base-board" : "enhanced-board"}`}
      style={backgroundStyle}
    >
      <div className='top-row'>
        <Card card='paper' playCard={playCard} />
        <Card card='scissors' playCard={playCard} />
      </div>
      <div className='bottom-row'>
        <Card card='rock' playCard={playCard} />
      </div>
      {!base && <Card card='lizard' />}
      {!base && <Card card='spock' />}
    </div>
  );
};

export default Board;
