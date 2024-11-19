import { Link } from 'react-router-dom';

import '../styles/style.css';

export default function Root() {
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
      <div className='main'>
				<div className='game'>
					<Link to={'games/tic-tac-toe'} className='link'>
						Tic Tac Toe
						<img src='tic-tac-toe.png'/>
					</Link>
				</div>
			
				<div className='game'>
					<Link to={'games/connect-four'} className='link'>
						Connect 4	
					</Link>
				</div>
				<div className='game'>
					Under development	
				</div>
				<div className='game'>
					Under development
				</div>
      </div>
    </>
  );

}
