import './Board.css';
import Tile from './Tile';
import { useState } from 'react';

const Board = () => {

  const initialBoardState = [];
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j <= 7; j++) {
      let path = '/assets/images';
      let image = '/no-piece';
      (i === 0 && j === 0) && (image = '/black-rook.svg');
      (i === 6 && j === 0) && (image = '/white-rook.svg');
      (i === 2 && j === 5) && (image = '/black-pawn.svg');
      (i === 1 && j === 0) && (image = '/black-rook.svg');
      (i === 3 && j === 6) && (image = '/white-pawn.svg');
      path += image;
      initialBoardState.push(<Tile row={i} column={j} image={path} />);
    }
  }
  const getTile = (r, c, imgPath) => {
    if(!imgPath) imgPath = '/assets/images/imgPath';
    return <Tile row={r} column={c} image={imgPath} />
  }
  const [board, setBoard] = useState(initialBoardState);
  const [count, setCount] = useState(0);
  const onhandleclick = () => {
    setCount(prev => prev+1);
    let player1 = 'w', player2 = 'b';
    if(count%2){
      player1 = 'b'; 
      player2 = 'w';
    }
    let flag = false;
    for (let i = 0; i <= 63 && flag === false; i++) {
      let imagePath = board[i]['props']['image'];
      let attacker = imagePath.slice(15);
      let minDist = 1000, coordinates = [100, 100];

      if(attacker[0] === player1){
        console.log(`Attacker ${attacker}`);
        for(let j = 0; j <= 63 && flag === false; j++){
          let imagePathOfTarget = board[j]['props']['image'];
          let target = imagePathOfTarget.slice(15);
          if(target[0] === player2){
            const attackingPiece = attacker.slice(6, -4);
            if(attackingPiece === 'rook'){
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
                else{
                  if(minDist > Math.abs(board[i]['props']['row'] - board[j]['props']['row'])){
                    minDist = Math.abs(board[i]['props']['row'] - board[j]['props']['row']);
                    coordinates[0] = board[j]['props']['row'];
                    coordinates[1] = board[j]['props']['column'];
                  }
                }
              }
            }

            else if(attackingPiece === 'pawn'){
              if(player1 === 'w'){     
                // console.log('me');           
                if(board[i]['props']['row']-1 === board[j]['props']['row'] && (board[i]['props']['column']+1 === board[j]['props']['column'] || board[i]['props']['column']-1 === board[j]['props']['column'])){
                  // console.log(`${attacker} killed ${target}`);
                  flag = true;
                  // if(board[i]['props']['column']+1 === board[j]['props']['column']){
                  coordinates[0] = board[j]['props']['row'];
                  coordinates[1] = board[j]['props']['column'];
                  // console.log(coordinates);
                  // else{
                  //   coordinates[0] = board[j]['props']['row']-1;
                  //   coordinates[1] = board[j]['props']['column']+1;
                  // }
                }
              }
              else{   
                
                if(board[i]['props']['row']+1 === board[j]['props']['row'] && (board[i]['props']['column']+1 === board[j]['props']['column'] || board[i]['props']['column']-1 === board[j]['props']['column'])){
                  // console.log(`${attacker} killed ${target}`);
                  flag = true;
                  // if(board[i]['props']['column']+1 === board[j]['props']['column']){
                  coordinates[0] = board[j]['props']['row'];
                  coordinates[1] = board[j]['props']['column'];
                  // console.log(coordinates);
                  // else{
                  //   coordinates[0] = board[j]['props']['row']-1;
                  //   coordinates[1] = board[j]['props']['column']+1;
                  // }
                }
                // if(board[i]['props']['row']+1 === board[j]['props']['row'] && (board[i]['props']['column']+1 === board[j]['props']['column'] || board[i]['props']['column']-1 === board[j]['props']['column'])){
                //   // console.log(`${attacker} killed ${target}`);
                  // flag = true;
                //   if(board[i]['props']['column']+1 === board[j]['props']['column']){
                //     coordinates[0] = board[j]['props']['row']+1;
                //     coordinates[1] = board[i]['props']['column']-1;
                //   }
                //   else{
                //     coordinates[0] = board[j]['props']['row']+1;
                //     coordinates[1] = board[i]['props']['column']+1;
                //   }
                // }
              }
            }
          }
        }
      }
      if(coordinates[0] !== 100){
        // console.log(minDist);
        console.log(coordinates);
        setBoard(board.map((tile) => {
          if(tile.props.row === board[i]['props']['row'] && tile.props.column === board[i]['props']['column'])  tile = getTile(tile.props.row, tile.props.column)
          else if(tile.props.row === coordinates[0] && tile.props.column === coordinates[1]) tile = getTile(coordinates[0], coordinates[1], board[i].props.image);
          return tile;
        }));
        // console.log(board);
        // board.map((tile) => {
        //   console.log(tile.props);
        // })
      }
    }
    
  }

  return (
    <div>
      <div className="board">{board}</div>
      <button onClick={onhandleclick}>Play</button>
    </div>
  )
  
}

export default Board;