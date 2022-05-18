import React from "react";
import pentagonBg from "../assets/bg-pentagon.svg";
import triangleBg from "../assets/bg-triangle.svg";
import Card from "./Card";
import "../styles/Board.css";

const Board = ({ base }) => {
  const backgroundStyle = {
    backgroundImage: `url(${base ? triangleBg : pentagonBg})`,
  };

  return (
    <div
      className={`board ${base ? "base-board" : "enhanced-board"}`}
      style={backgroundStyle}
    >
      <Card card='paper' />
      <Card card='scissors' />
      <Card card='rock' />
      {!base && <Card card='lizard' />}
      {!base && <Card card='spock' />}
    </div>
  );
};

export default Board;
