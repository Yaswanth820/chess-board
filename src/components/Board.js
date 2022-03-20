import './Board.css';
import Tile from './Tile';

const Board = () => {
  // const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const board = [];
  for(let i = 7; i >= 0; i--){
    for(let j = 1; j <= 8; j++){
      board.push(<Tile row={i} column={j} />);
    }
  }
  return (
    <div>
      <div className="board">{board}</div>
    </div>
  )
}

export default Board;