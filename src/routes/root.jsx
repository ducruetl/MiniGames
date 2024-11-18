import { Link } from 'react-router-dom';

import '../style.css';

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
				<Link to={'tic-tac-toe'} className='link'>
					<div className='game'>
						Tic Tac Toe
					</div>
				</Link>
				<div className='game'>
					Under development
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
