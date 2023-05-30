import { useState } from "react";
import Hexagon from './hexagon.js';

export default function Board(){
    //const [board, setTile] = useState(Array.from({ length: 8 }, () => Array(8).fill(0))); 
    const [board, setTile] = useState(Array(8).map(() => Array(8).fill(0)));

    const [blueTurn, takeTurn] = useState(true);
    
    function hexClicked(){
        
    }
    
    return(
        <div className="board">
            <div className='hex-row'>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={0} setColor={setTile} hexClicked={hexClicked}/>
            </div>
                {/* <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][1]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][2]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][3]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][4]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][5]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][6]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][7]} setColor={setTile}hexClicked={hexClicked}/>
            </div>
            
            <div className='hex-row'>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][0]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][1]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][2]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][3]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][4]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][5]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][6]} setColor={setTile}hexClicked={hexClicked}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][7]} setColor={setTile}hexClicked={hexClicked}/>
            </div> */}
        </div>
    );
}
