import './Board.css';

const Board = () => {
  // const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const board = [];
  for(let i = 7; i >= 0; i--){
    for(let j = 1; j <= 8; j++){
      (i%2) === 0? ((j%2) === 0? board.push( <div className='tileW'></div> )
                                  :board.push( <div className='tileB'></div> ))
                    :((j%2) === 0? board.push( <div className='tileB'></div> )
                                  :board.push( <div className='tileW'></div> ))
    }
  }
  return (
    <div>
      <div className="board">{board}</div>
    </div>
  )
}

export default Board;