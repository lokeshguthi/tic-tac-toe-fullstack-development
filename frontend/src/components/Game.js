import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, getBestMove } from '../utils/gameHelpers';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isHumanVsComputer, setIsHumanVsComputer] = useState(false);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    if (isHumanVsComputer && !isXNext && !calculateWinner(newBoard)) {
      const bestMove = getBestMove(newBoard);
      newBoard[bestMove] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  };

  const startGame = (isHumanVsComputer) => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsHumanVsComputer(isHumanVsComputer);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={handleClick} />
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
