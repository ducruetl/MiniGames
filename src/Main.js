import { useState } from 'react';
import './style.css';

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
    const line = lines[i];
    if (squares[line[0]] && squares[line[0]] === squares[line[1]] && squares[line[1]] === squares[line[2]]) {
      return squares[line[0]];
    }
  }

  return null;

}

function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let gameStatus;

  if (winner != null) {
    gameStatus = winner + " a gagné";
  } else {
    gameStatus = "Prochain tour : " + (xIsNext ? "X" : "O");
  }

  function handleClick(squareNum) {
    const copySquares = squares.slice();

    if (winner != null || squares[squareNum] != null) {
      return;
    }

    if (xIsNext) {
      copySquares[squareNum] = "X";
      setXIsNext(false);
    } else {
      copySquares[squareNum] = "O";
      setXIsNext(true);
    }
    
    setSquares(copySquares);
  }

  return (
    <>
    <div className='gameStatus'>{gameStatus}</div>
    <div className='row'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='row'>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='row'>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  );
}

function Main() {
  return (
    <>
      <div className='header'>
        <h1>Mini Games</h1>
        <hr/>
      </div>
      <div className='main'>
        <GameBoard/>
      </div>
    </>
  );
}

export default Main;
