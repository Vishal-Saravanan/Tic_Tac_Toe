import React from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <button 
      className='bg-[#FBFFF1] h-20 w-40 border-2 border-black text-center font-bold text-2xl flex items-center justify-center text-4xl text-yellow-500'
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
