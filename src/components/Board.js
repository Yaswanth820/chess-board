import './Board.css'

const Board = () => {
  const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const board = [];
  for(let i = 7; i >= 0; i--){
    for(let j = 1; j <= 8; j++){
      (i%2) === 0? ((j%2) === 0? board.push( <div className='tileW'>[{xAxis[i]+j}]</div> ): 
                                  board.push( <div className='tileB'>[{xAxis[i]+j}]</div> )):
                    ((j%2) === 0? board.push( <div className='tileB'>[{xAxis[i]+j}]</div> ): 
                                  board.push( <div className='tileW'>[{xAxis[i]+j}]</div> ))
    }
  }
  return (
    <div className="board">{board}</div>
  )
}

export default Board;