import { useState } from 'react';
import './style.css';

// Return true if all the squares are filled, return false if at least one square is null
function isBoardFull(squares) {
	for (let i = 0; i < squares.length; i++) {
		if (squares[i] === null) {
			return false;
		}	
	}
	return true;
}

// Verify each row, column and diagonals to see if one of them contains only "X" or "O", if it is the case, return the value that fills the line.
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

// A square component of the board, it can contains the values "X", "O" or "". 
function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

// The game board of the tic-tac-toe game, contains 9 squares
function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let gameStatus;

  if (winner != null) {
    gameStatus = winner + " has won!";
  } else if (isBoardFull) {
		gameStatus = "Draw";
	} else {
    gameStatus = "Next turn : " + (xIsNext ? "X" : "O");
  }

  // This function is triggered when a square is clicked
  function handleClick(squareNum) {
    const copySquares = squares.slice();

    // If there is already a winner, or if the square already contains a not null value, the function does nothing.
    if (winner != null || squares[squareNum] != null) {
      return;
    }

    // Determine which value to give to the square depending on the round.
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
