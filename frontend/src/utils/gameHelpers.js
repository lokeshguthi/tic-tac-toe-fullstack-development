export const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
  export const getBestMove = (board) => {
    // Minimax algorithm logic to determine the best move
    // This is a simplified placeholder, you need to implement the full algorithm
  
    const emptySquares = board.map((square, index) => square === null ? index : null).filter(val => val !== null);
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };
  