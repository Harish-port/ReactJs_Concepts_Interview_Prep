import useTicTacToe from "../hooks/useTicTacToe";
import "./style.css";
import React, { useState } from "react";

function TicTacToe() {
  const { board, calculateWinner, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();
  console.log(board);

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          {" "}
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            >
              {b[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
