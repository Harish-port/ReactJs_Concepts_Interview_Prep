import { useState } from "react";

const useTicTacToe = () => {
  const initialValue = Array(9).fill(null);
  const [board, setBoard] = useState(initialValue);
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleReset = () => {
    setBoard(initialValue);
  };
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[b] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!!`
    if (!board.includes(null)) return `Its a draw!!`
    return `Player ${isXNext ? "X" : "O"} turn!!!`
  };
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext)
  };
  return {
    board,
    handleReset,
    handleClick,
    getStatusMessage,
    calculateWinner,
  };
};
export default useTicTacToe;
