import './Tile.css';

const Tile = ({ row, column }) => {
    let path='/assets/images', image;
    row === 1&& (image = '/black-pawn.svg');
    row === 6&& (image = '/white-pawn.svg');

    path += image;
    console.log(path);
    return(
    (row%2) === 0? (    (column%2) === 0?  <div className='tile tileW'> <img src={path} alt="" /> </div> 
                                  :  <div className='tile tileB'> <img src={path} alt="" /> </div>  )
                    :(  (column%2) === 0?  <div className='tile tileB'> <img src={path} alt="" /> </div> 
                                  : <div className='tile tileW'> <img src={path} alt="" /> </div>  )
    )
}

export default Tile;