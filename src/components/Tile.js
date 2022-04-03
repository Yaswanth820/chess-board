import './Tile.css';
import { useState } from 'react';

const Tile = ({ row, column, image }) => {

    // const [image, setImage] = useState('');
    // let path = '/assets/images', image;
    // row === 1 && (image = '/black-pawn.svg');
    // row === 6 && (image = '/white-pawn.svg');
    // (row === 0 && column === 1) && (image = '/black-rook.svg');
    // (row === 6 && column === 1) && (image = '/white-rook.svg');

    // onSetChessPiece(image);
    // imgg(row, column, image);
    // path += image;
    // console.log(path);
    return (
        (row % 2) === 0 ? ((column % 2) === 0 ? <div className='tile tileW' style={{ backgroundImage: `url(${image})` }}></div>
            : <div className='tile tileB' style={{ backgroundImage: `url(${image})` }}></div>)
            : ((column % 2) === 0 ? <div className='tile tileB' style={{ backgroundImage: `url(${image})` }}></div>
                : <div className='tile tileW' style={{ backgroundImage: `url(${image})` }}></div>)
    )
}

export default Tile;