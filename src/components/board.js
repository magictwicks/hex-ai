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
      
      // check if the tile is empty
      if (board[row][col] !== 0){
         return;
      }

      // deep copy of 2d board array
      let newBoard = board.map((innerArray) => [...innerArray]);

      // sets the tile color if piece has not already been placed
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
                <Hexagon color={board[0][1]} hexClicked={() => hexClicked(0, 1)}/>
                <Hexagon color={board[0][2]} hexClicked={() => hexClicked(0, 2)}/>
                <Hexagon color={board[0][3]} hexClicked={() => hexClicked(0, 3)}/>
                <Hexagon color={board[0][4]} hexClicked={() => hexClicked(0, 4)}/>
                <Hexagon color={board[0][5]} hexClicked={() => hexClicked(0, 5)}/>
                <Hexagon color={board[0][6]} hexClicked={() => hexClicked(0, 6)}/>
                <Hexagon color={board[0][7]} hexClicked={() => hexClicked(0, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[1][0]} hexClicked={() => hexClicked(1, 0)}/>
                <Hexagon color={board[1][1]} hexClicked={() => hexClicked(1, 1)}/>
                <Hexagon color={board[1][2]} hexClicked={() => hexClicked(1, 2)}/>
                <Hexagon color={board[1][3]} hexClicked={() => hexClicked(1, 3)}/>
                <Hexagon color={board[1][4]} hexClicked={() => hexClicked(1, 4)}/>
                <Hexagon color={board[1][5]} hexClicked={() => hexClicked(1, 5)}/>
                <Hexagon color={board[1][6]} hexClicked={() => hexClicked(1, 6)}/>
                <Hexagon color={board[1][7]} hexClicked={() => hexClicked(1, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[2][0]} hexClicked={() => hexClicked(2, 0)}/>
                <Hexagon color={board[2][1]} hexClicked={() => hexClicked(2, 1)}/>
                <Hexagon color={board[2][2]} hexClicked={() => hexClicked(2, 2)}/>
                <Hexagon color={board[2][3]} hexClicked={() => hexClicked(2, 3)}/>
                <Hexagon color={board[2][4]} hexClicked={() => hexClicked(2, 4)}/>
                <Hexagon color={board[2][5]} hexClicked={() => hexClicked(2, 5)}/>
                <Hexagon color={board[2][6]} hexClicked={() => hexClicked(2, 6)}/>
                <Hexagon color={board[2][7]} hexClicked={() => hexClicked(2, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[3][0]} hexClicked={() => hexClicked(3, 0)}/>
                <Hexagon color={board[3][1]} hexClicked={() => hexClicked(3, 1)}/>
                <Hexagon color={board[3][2]} hexClicked={() => hexClicked(3, 2)}/>
                <Hexagon color={board[3][3]} hexClicked={() => hexClicked(3, 3)}/>
                <Hexagon color={board[3][4]} hexClicked={() => hexClicked(3, 4)}/>
                <Hexagon color={board[3][5]} hexClicked={() => hexClicked(3, 5)}/>
                <Hexagon color={board[3][6]} hexClicked={() => hexClicked(3, 6)}/>
                <Hexagon color={board[3][7]} hexClicked={() => hexClicked(3, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[4][0]} hexClicked={() => hexClicked(4, 0)}/>
                <Hexagon color={board[4][1]} hexClicked={() => hexClicked(4, 1)}/>
                <Hexagon color={board[4][2]} hexClicked={() => hexClicked(4, 2)}/>
                <Hexagon color={board[4][3]} hexClicked={() => hexClicked(4, 3)}/>
                <Hexagon color={board[4][4]} hexClicked={() => hexClicked(4, 4)}/>
                <Hexagon color={board[4][5]} hexClicked={() => hexClicked(4, 5)}/>
                <Hexagon color={board[4][6]} hexClicked={() => hexClicked(4, 6)}/>
                <Hexagon color={board[4][7]} hexClicked={() => hexClicked(4, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[5][0]} hexClicked={() => hexClicked(5, 0)}/>
                <Hexagon color={board[5][1]} hexClicked={() => hexClicked(5, 1)}/>
                <Hexagon color={board[5][2]} hexClicked={() => hexClicked(5, 2)}/>
                <Hexagon color={board[5][3]} hexClicked={() => hexClicked(5, 3)}/>
                <Hexagon color={board[5][4]} hexClicked={() => hexClicked(5, 4)}/>
                <Hexagon color={board[5][5]} hexClicked={() => hexClicked(5, 5)}/>
                <Hexagon color={board[5][6]} hexClicked={() => hexClicked(5, 6)}/>
                <Hexagon color={board[5][7]} hexClicked={() => hexClicked(5, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[6][0]} hexClicked={() => hexClicked(6, 0)}/>
                <Hexagon color={board[6][1]} hexClicked={() => hexClicked(6, 1)}/>
                <Hexagon color={board[6][2]} hexClicked={() => hexClicked(6, 2)}/>
                <Hexagon color={board[6][3]} hexClicked={() => hexClicked(6, 3)}/>
                <Hexagon color={board[6][4]} hexClicked={() => hexClicked(6, 4)}/>
                <Hexagon color={board[6][5]} hexClicked={() => hexClicked(6, 5)}/>
                <Hexagon color={board[6][6]} hexClicked={() => hexClicked(6, 6)}/>
                <Hexagon color={board[6][7]} hexClicked={() => hexClicked(6, 7)}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[7][0]} hexClicked={() => hexClicked(7, 0)}/>
                <Hexagon color={board[7][1]} hexClicked={() => hexClicked(7, 1)}/>
                <Hexagon color={board[7][2]} hexClicked={() => hexClicked(7, 2)}/>
                <Hexagon color={board[7][3]} hexClicked={() => hexClicked(7, 3)}/>
                <Hexagon color={board[7][4]} hexClicked={() => hexClicked(7, 4)}/>
                <Hexagon color={board[7][5]} hexClicked={() => hexClicked(7, 5)}/>
                <Hexagon color={board[7][6]} hexClicked={() => hexClicked(7, 6)}/>
                <Hexagon color={board[7][7]} hexClicked={() => hexClicked(7, 7)}/>
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
