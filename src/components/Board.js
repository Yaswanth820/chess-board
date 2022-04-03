import './Board.css';
import Tile from './Tile';
import { useState } from 'react';

const Board = () => {

  const initialBoardState = [];

  // const chessPieceName = onSetChessPiece;
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j <= 7; j++) {
      let path = '/assets/images';
      let image = '/no-piece';
      (i === 0 && j === 0) && (image = '/black-rook.svg');
      (i === 6 && j === 0) && (image = '/white-rook.svg');
      path += image;
      initialBoardState.push(<Tile row={i} column={j} image={path} />);
    }
  }

  const [board, setBoard] = useState(initialBoardState);

  if(1){
    // White
    let flag = false;
    for (let i = 0; i <= 63 && flag === false; i++) {
      let imagePath = board[i]['props']['image'];
      let attacker = imagePath.slice(15);
      if(attacker[0] === 'w'){
        console.log(`Attacker ${attacker}`);
        for(let j = 0; j <= 63 && flag === false; j++){
          let imagePathOfTarget = board[j]['props']['image'];
          let target = imagePathOfTarget.slice(15);
          if(target[0] === 'b'){
            // Rook
            for(let k = 0; k < 8 && flag === false; k++){
              if(board[i]['props']['row'] === board[j]['props']['row']){
                console.log(`${attacker} killed ${target}`);
                flag = true;
                // const left = board.slice(0, j)['props']['image'];
                // const right = board.slice(j)['props']['image'];
                // console.log(`left ${left}`);
                // console.log(`right ${right}`);
                // setBoard();
                // setBoard();
                // board[j]['props']['image'] = board[i]['props']['image'];
                // board[i]['props']['image'] = '/assets/images/no-piece';
              }
            }
            // Rook
            for(let k = 0; k < 8 && flag === false; k++){
              if(board[i]['props']['column'] === board[j]['props']['column']){
                console.log(`${attacker} killed ${target}`);
                flag = true;
                // const left = board.slice(0, j);
                // const right = board.slice(j)['props']['image'];
                // left.forEach(element => {
                  // console.log(element.props);
                // });
                // console.log(`right ${right}`);
                // board[j]['props']['image'] = board[i]['props']['image'];
                // board[i]['props']['image'] = '/assets/images/no-piece';
              }
            }
          }
        }
        // console.log(chessPiece);
      }
    }
  }
  else{
    // Black
    for (let i = 0; i <= 63; i++) {
      // console.log(board[i]['props']['image']);
    }
  }
  // console.log(board[8]);
  return (
    <div>
      <div className="board">{board}</div>
    </div>
  )
  
}

export default Board;