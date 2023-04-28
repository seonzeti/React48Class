import React from "react";
import { Card } from "react-bootstrap";

const Board = ({ name, imgPath, score }) => {
  return (
    <div className="board-area">
      <h3>{name}</h3>
      <img src={imgPath}></img>
      <h4>현재 점수는?</h4>
      <h3>{score}</h3>
    </div>
  );
};

export default Board;
