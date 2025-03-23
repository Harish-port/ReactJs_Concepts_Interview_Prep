import React from "react";
import "./style.css";
import useTicTacToe from "../hooks/useTicTacToe";
function TicTacToe() {
  const {
    board,
    handleReset,
    handleClick,
    getStatusMessage,
    calculateWinner,
  } = useTicTacToe();
  return (
    <div className="game-wrapper">
      <div children="header-display">
        <span>{getStatusMessage()}</span>
        <button className="reset-btn" onClick={() => handleReset()}>
          Reset Game
        </button>
      </div>
      <div className="game-board">
        {board.map((s, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={s !== null}
            className="cell"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
