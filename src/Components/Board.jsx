import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    const nextSquares = squares.slice();  
    if (calculateWinner(squares) || nextSquares[i]) {
      return;
    }
    nextSquares[i] = isNext ? "X" : "O";
    setIsNext(!isNext);
    setSquares(nextSquares);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-semibold text-white'>Welcome to Tic Tac Toe</h1>
      {winner ? (
        <h2 className='text-3xl text-green-500 mt-4'>{`Winner: ${winner}`}</h2>
      ) : (
        <h2 className='text-3xl text-blue-500 mt-4'>{`Next Player: ${isNext ? "X" : "O"}`}</h2>
      )}
      <div className='flex mt-10'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='flex'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='flex'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button 
        className='text-white bg-red-500 px-10 py-4 rounded-full mt-10 transition delay-100 duration-500 hover:scale-125' 
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;
