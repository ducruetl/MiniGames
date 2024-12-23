import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/connect-four.css';

function Circle({value, onCoinClick}) {
	if (value === 'red') {
		return <button className='redCoin' onClick={onCoinClick}/>;
	}
	if (value === 'yellow') {
		return <button className='yellowCoin' onClick={onCoinClick}/>;
	}
	return <button className='coin' onClick={onCoinClick}/>;
}

function calculateWinner(coinColors ,coinNumber) {
	let i = 1;
	let cpt = 1;
	const color = coinColors[coinNumber];

	if (coinNumber % 6 >= 3) {
		while (i < 4) {
			if (coinColors[coinNumber - i] === color) {
				cpt++;
			} else {
				i = 4;
			}
			i++;
		}
		if (cpt === 4) {
			return true;
		}
		i = 1;
		cpt = 1;
	} else {
		while (i < 4) {
			if (coinColors[coinNumber + i] === color) {
				cpt++;
			} else {
				i = 4;
			}
			i++;
		}
		if (cpt === 4) {
			return true;
		}
		i = 1;
		cpt = 1;
	}

	if (coinNumber + 18 <= 41) {
		while (i < 4) {
			if (coinColors[coinNumber + i*6] === color) {
				cpt++;
			} else {
				i = 4;
			}
			i++;
		}
		if (cpt === 4) {
			return true;
		}
		i = 1;
		cpt = 1;

		if (coinNumber % 6 >= 3) {
			while (i < 4) {
				if (coinColors[coinNumber - i + i*6] === color) {
					cpt++;
				} else {
					i = 4;
				}
				i++;
			}
			if (cpt === 4) {
				return true;
			}
			i = 1;
			cpt = 1;
		} else {
			while (i < 4) {
				if (coinColors[coinNumber + i + i*6] === color) {
					cpt++;
				} else {
					i = 4;
				}
				i++;
			}
			if (cpt === 4) {
				return true;
			}
			i = 1;
			cpt = 1;
		}

	}

	if (coinNumber - 18 >= 0) {
		while (i < 4) {
			if (coinColors[coinNumber - i*6] === color) {
				cpt++;
			} else {
				i = 4;
			}
			i++;
		}
		if (cpt === 4) {
			return true;
		}
		i = 1;
		cpt = 1;

		if (coinNumber % 6 >= 3) {
			while (i < 4) {
				if (coinColors[coinNumber - i - i*6] === color) {
					cpt++;
				} else {
					i = 4;
				}
				i++;
			}
			if (cpt === 4) {
				return true;
			}
			i = 1;
			cpt = 1;
		} else {
			while (i < 4) {
				if (coinColors[coinNumber + i - i*6] === color) {
					cpt++;
				} else {
					i = 4;
				}
				i++;
			}
			if (cpt === 4) {
				return true;
			}
			
		}
	}

	return false;

}

function GameBoard() {

	const [coinColors, setCoinColors] = useState(Array(42).fill(null));
	const [isRedNext, setIsRedNext] = useState(true);
	const [gameStatus, setGameStatus] = useState("Next turn : red");
	const [winner, setWinner] = useState(null);

	let circles = [];

	for (let i = 0; i < 42; i++) {
		circles.push(<Circle key={i} value={coinColors[i]} onCoinClick={() => handleCoinClick(i)}/>);
	}

	function handleCoinClick(coinNumber) {

		if (winner) {
			return;	
		}

		if (coinNumber % 6 === 0) {
			coinNumber++;	
		}
		const startingCoin = (Math.ceil(coinNumber/6) * 6) - 1;
		const newColors = coinColors.slice();

		for (let i = startingCoin; i > startingCoin - 6; i--) {
			if (coinColors[i] == null) {
				if (isRedNext) {
					newColors[i] = 'red'; 
					setIsRedNext(false);
					setGameStatus("Next turn : yellow");
				} else {
					newColors[i] = 'yellow';
					setIsRedNext(true);
					setGameStatus("Next turn : red");
				}
				setCoinColors(newColors);
				if (calculateWinner(newColors, i)) {
					setWinner(newColors[i]);
					setGameStatus(newColors[i] + " has won!");
				}
				return;
			}	
		}
	}

	return (
		<>
			<div className='gameStatus'>
				{gameStatus}	
			</div>
			<div className='connect-four'>
				{circles}
			</div>
		</>
	);
}

function ConnectFour() {
	return (
		<>
			<div className='header'>
        <h1>
					<Link to={'/'} className='link'>
						Mini Games
					</Link>
				</h1>
        <hr/>
      </div>
      <div className='mainGame'>
        <GameBoard/>
      </div>
		</>
	);
}

export default ConnectFour;
