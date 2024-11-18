import '../style.css';

export default function Root() {
	return (
    <>
      <div className='header'>
        <h1>Mini Games</h1>
        <hr/>
      </div>
      <div className='main'>
				<a className='game' href='/tic-tac-toe'>
					Tic Tac Toe
				</a>
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
