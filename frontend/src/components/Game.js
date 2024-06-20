import React, { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner, getBestMove } from '../utils/gameHelpers';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isHumanVsComputer, setIsHumanVsComputer] = useState(false);

  useEffect(() => {
    if (isHumanVsComputer && !isXNext) {
      const bestMove = getBestMove(board);
      setTimeout(() => {
        handleClick(bestMove, true);
      }, 500); // Add a slight delay to simulate thinking time
    }
  }, [isXNext, isHumanVsComputer, board]);

  const handleClick = (i, isComputer = false) => {
    if (board[i] || calculateWinner(board) || (isHumanVsComputer && !isXNext && !isComputer)) return;

    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const startGame = (isHumanVsComputer) => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsHumanVsComputer(isHumanVsComputer);
  };

  const winner = calculateWinner(board);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}</div>
        <button onClick={() => startGame(false)}>Human vs Human</button>
        <button onClick={() => startGame(true)}>Human vs Computer</button>
      </div>
    </div>
  );
}

export default Game;
