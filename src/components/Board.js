import './Board.css'

const Board = () => {
  const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const board = [];
  for(let i = 7; i >= 0; i--){
    for(let j = 1; j <= 8; j++){
      if(i%2){
        if(j%2){
          board.push( <div className='tileW'>[{xAxis[i]+j}]</div> );
        }else{
          board.push( <div className='tileB'>[{xAxis[i]+j}]</div> );
        }
      }
      else{
        if(j%2){
          board.push( <div className='tileB'>[{xAxis[i]+j}]</div> );
        }else{
          board.push( <div className='tileW'>[{xAxis[i]+j}]</div> );
        }
      }
    }
  }
  return (
    <div className="board">{board}</div>
  )
}

export default Board;