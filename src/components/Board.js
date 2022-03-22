import './Board.css';
import Tile from './Tile';
import { useState } from 'react';

const Board = () => {
  // const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  const initialBoardState = [];
  const boardState = [];
  // const [chessPieceName, setChessPieceName] = useState('hey');
  const onSetChessPiece = (piece) => {
    // console.log(`Image: ${piece}`);
    return piece;
    // console.log(chessPieceName);
  }
  const chessPieceName = onSetChessPiece;
  for (let i = 7; i >= 0; i--) {
    for (let j = 1; j <= 8; j++) {
      initialBoardState.push(<Tile row={i} column={j} onSetChessPiece={onSetChessPiece} />);
      boardState.push({ i, j, chessPieceName });
    }
  }
  const [board, setBoard] = useState(initialBoardState);
  console.log(boardState);
  return (
    <div>
      <div className="board">{board}</div>
    </div>
  )
}

export default Board;