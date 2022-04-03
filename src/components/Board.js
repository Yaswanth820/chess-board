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
      // (i === 1 && j === 0) && (image = '/black-pawn.svg');
      // (i === 7 && j === 0) && (image = '/black-pawn.svg');
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
      let minDist = 1000;
      let coordinates = [100, 100];
      if(attacker[0] === 'w'){
        console.log(`Attacker ${attacker}`);
        for(let j = 0; j <= 63 && flag === false; j++){
          let imagePathOfTarget = board[j]['props']['image'];
          let target = imagePathOfTarget.slice(15);
          if(target[0] === 'b'){
            // Rook
            if(board[i]['props']['row'] === board[j]['props']['row'] || board[i]['props']['column'] === board[j]['props']['column']){
              console.log(`${attacker} killed ${target}`);
              flag = true;
              if(board[i]['props']['row'] === board[j]['props']['row']){
                if(minDist > Math.abs(board[i]['props']['column'] - board[j]['props']['column'])){
                  minDist = Math.abs(board[i]['props']['column'] - board[j]['props']['column']);
                  coordinates[0] = board[j]['props']['row'];
                  coordinates[1] = board[j]['props']['column'];
                }
              }
                // minDist = Math.min(minDist, Math.abs(board[i]['props']['column'] - board[j]['props']['column']));
              else{
                if(minDist > Math.abs(board[i]['props']['row'] - board[j]['props']['row'])){
                  minDist = Math.abs(board[i]['props']['row'] - board[j]['props']['row']);
                  coordinates[0] = board[j]['props']['row'];
                  coordinates[1] = board[j]['props']['column'];
                }
              }
            }
                // const left = board.slice(0, j)['props']['image'];
                // const right = board.slice(j)['props']['image'];
                // console.log(`left ${left}`);
                // console.log(`right ${right}`);
                // setBoard();
                // setBoard();
                // board[j]['props']['image'] = board[i]['props']['image'];
                // board[i]['props']['image'] = '/assets/images/no-piece';
              
          }
            // Rook
            // for(let k = 0; k < 8 && flag === false; k++){
            //   if(board[i]['props']['column'] === board[j]['props']['column']){
            //     console.log(`${attacker} killed ${target}`);
            //     flag = true;
            //     // console.log(j);
            //     const left = board.slice(0, j);
            //     const right = board.slice(j);
            //     // console.log(`right ${right}`);
            //     console.log(left.length + right.length);
            //     setBoard([... left, ...right]);
            //     console.log(board);
            //     // board[j]['props']['image'] = board[i]['props']['image'];
            //     // board[i]['props']['image'] = '/assets/images/no-piece';
            //   }
            // }
          }
        }
        if(minDist != 1000){
          console.log(minDist);
          console.log(coordinates);
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