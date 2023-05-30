import { useState } from "react";
import Hexagon from './hexagon.js';

const Color = {
  BLUE : 1,
  RED : -1 
} 

export default function Board(){
    //const [board, setTile] = useState(Array.from({ length: 8 }, () => Array(8).fill(0))); 
    const [board, setBoard] = useState(Array(8).fill(0).map(() => Array(8).fill(0)));
    console.log("test")
    console.log(board)

    const [blueTurn, takeTurn] = useState(true);
    
    function hexClicked(row, col){  
      
      // deep copy of 2d board array
      let newBoard = board.map((innerArray) => [...innerArray]);

      if (blueTurn){
        newBoard[row][col] = Color.BLUE;
      }
      else {
        newBoard[row][col] = Color.RED;
      }

      // re-renders the board
      setBoard(newBoard);
      takeTurn(!blueTurn)
    }
    
    return(
        <div className="board">
            <div className='hex-row'>
                <Hexagon color={board[0][0]} hexClicked={() => hexClicked(0, 0)}/>
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
