import { useState } from "react";

const initialBoard = Array(9).fill("");

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERNS = [];
  const calculateWinner = () => {};
  const handleClick = () => {};
  const getStatusMessage = () => {};
  const resetGame = () => {};
  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};
export default useTicTacToe;
