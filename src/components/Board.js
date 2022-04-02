import './Board.css';
import Tile from './Tile';
import { useState } from 'react';

const Board = () => {

  const initialBoardState = [];
  const boardState = [];
  const [tboard, tboardSetState] = useState([]);
  const pull_img = (i, j, pieceimg) => {
    if(pieceimg != null){
      const p = { i, j, pieceimg };
      // console.log(p);
      tboardSetState([...tboard, p]);
      console.log(tboard);
    }
  }


  // const chessPieceName = onSetChessPiece;
  for (let i = 7; i >= 0; i--) {
    for (let j = 1; j <= 8; j++) {
      initialBoardState.push(<Tile row={i} column={j} imgg={pull_img} />);
      // let nn = imgg.length;
      // boardState.push({ i, j });
    }
  }

  const [board, setBoard] = useState(initialBoardState);

  if(counter%2){
    // White
    for (let i = 0; i < tboard.length; i++) {
      
    }
  }else{
    // Black

  }
  console.log(tboard);
  return (
    <div>
      <div className="board">{board}</div>
    </div>
  )
  
}

export default Board;