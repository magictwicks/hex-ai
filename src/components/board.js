import { useState } from "react";
import Hexagon from './hexagon.js';

const Color = {
    BLUE : 1,
    RED : -1 ,
    BLUE_PATH : 2,
    RED_PATH : -2 
} 

function adjacentTiles(row, column){
    let adjTiles = [
        [row-1, column],
        [row-1, column+1],
        [row, column-1],
        [row,column+1],
        [row+1,column-1],
        [row+1, column]
    ]
    return adjTiles.filter(item => {
        return (item[0] >= 0 && item[0] < 8) && (item[1] >= 0 && item[1] < 8);
    });
}

function updateTiles(board, row, col, turn){
    //Update given tile
    const COLOR_PATH = 2 * turn;
    const adjTiles = adjacentTiles(row, col);
    board[row][col] = turn;
    if ((turn > 0 && row === 0) || (turn < 0 && col === 0)){
        board[row][col] = COLOR_PATH;
    }

    adjTiles.forEach((adjTile) => {
        if (board[adjTile[0]][adjTile[1]] === COLOR_PATH){
            board[row][col] = COLOR_PATH;
        }
    });

    //Exit if there is no path to propagate
    if (board[row][col] !== COLOR_PATH){
        return board;
    }

    //Recursively update all touching tiles
    adjTiles.forEach((adjTile) => {
        if (board[adjTile[0]][adjTile[1]] === turn){
            updateTiles(board, adjTile[0], adjTile[1], turn);
        }
    });
    return board;
}


export default function Board({setWinState, showEdges}){
    const [board, setBoard] = useState(Array(8).fill(0).map(() => Array(8).fill(0)));
    const [turn, takeTurn] = useState(Color.BLUE);

    function hexClicked(row, col){  

        if (board[row][col] !== 0){
            return;
        }

        // deep copy of 2d board array
        let newBoard = board.map((innerArray) => [...innerArray]);

        updateTiles(newBoard, row, col, turn, setWinState);
        console.log(board);

        // re-renders the board
        setBoard(newBoard);
        takeTurn(turn * -1);

        //Checks for a winner
        for (let i = 0; i < 8; i++){
            if(newBoard[7][i] === Color.BLUE_PATH || newBoard[i][7] === Color.RED_PATH){
                setWinState(true);
                break;
            }
        }
    }

    return(
        <div className="board">
            <div className='hex-row'>
                <Hexagon color={board[0][0]} hexClicked={() => hexClicked(0, 0)} coords={[0, 0]}/>
                <Hexagon color={board[0][1]} hexClicked={() => hexClicked(0, 1)} coords={[0, 1]}/>
                <Hexagon color={board[0][2]} hexClicked={() => hexClicked(0, 2)} coords={[0, 2]}/>
                <Hexagon color={board[0][3]} hexClicked={() => hexClicked(0, 3)} coords={[0, 3]}/>
                <Hexagon color={board[0][4]} hexClicked={() => hexClicked(0, 4)} coords={[0, 4]}/>
                <Hexagon color={board[0][5]} hexClicked={() => hexClicked(0, 5)} coords={[0, 5]}/>
                <Hexagon color={board[0][6]} hexClicked={() => hexClicked(0, 6)} coords={[0, 6]}/>
                <Hexagon color={board[0][7]} hexClicked={() => hexClicked(0, 7)} coords={[0, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[1][0]} hexClicked={() => hexClicked(1, 0)} coords={[1, 0]}/>
                <Hexagon color={board[1][1]} hexClicked={() => hexClicked(1, 1)} coords={[1, 1]}/>
                <Hexagon color={board[1][2]} hexClicked={() => hexClicked(1, 2)} coords={[1, 2]}/>
                <Hexagon color={board[1][3]} hexClicked={() => hexClicked(1, 3)} coords={[1, 3]}/>
                <Hexagon color={board[1][4]} hexClicked={() => hexClicked(1, 4)} coords={[1, 4]}/>
                <Hexagon color={board[1][5]} hexClicked={() => hexClicked(1, 5)} coords={[1, 5]}/>
                <Hexagon color={board[1][6]} hexClicked={() => hexClicked(1, 6)} coords={[1, 6]}/>
                <Hexagon color={board[1][7]} hexClicked={() => hexClicked(1, 7)} coords={[1, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[2][0]} hexClicked={() => hexClicked(2, 0)} coords={[2, 0]}/>
                <Hexagon color={board[2][1]} hexClicked={() => hexClicked(2, 1)} coords={[2, 1]}/>
                <Hexagon color={board[2][2]} hexClicked={() => hexClicked(2, 2)} coords={[2, 2]}/>
                <Hexagon color={board[2][3]} hexClicked={() => hexClicked(2, 3)} coords={[2, 3]}/>
                <Hexagon color={board[2][4]} hexClicked={() => hexClicked(2, 4)} coords={[2, 4]}/>
                <Hexagon color={board[2][5]} hexClicked={() => hexClicked(2, 5)} coords={[2, 5]}/>
                <Hexagon color={board[2][6]} hexClicked={() => hexClicked(2, 6)} coords={[2, 6]}/>
                <Hexagon color={board[2][7]} hexClicked={() => hexClicked(2, 7)} coords={[2, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[3][0]} hexClicked={() => hexClicked(3, 0)} coords={[3, 0]}/>
                <Hexagon color={board[3][1]} hexClicked={() => hexClicked(3, 1)} coords={[3, 1]}/>
                <Hexagon color={board[3][2]} hexClicked={() => hexClicked(3, 2)} coords={[3, 2]}/>
                <Hexagon color={board[3][3]} hexClicked={() => hexClicked(3, 3)} coords={[3, 3]}/>
                <Hexagon color={board[3][4]} hexClicked={() => hexClicked(3, 4)} coords={[3, 4]}/>
                <Hexagon color={board[3][5]} hexClicked={() => hexClicked(3, 5)} coords={[3, 5]}/>
                <Hexagon color={board[3][6]} hexClicked={() => hexClicked(3, 6)} coords={[3, 6]}/>
                <Hexagon color={board[3][7]} hexClicked={() => hexClicked(3, 7)} coords={[3, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[4][0]} hexClicked={() => hexClicked(4, 0)} coords={[4, 0]}/>
                <Hexagon color={board[4][1]} hexClicked={() => hexClicked(4, 1)} coords={[4, 1]}/>
                <Hexagon color={board[4][2]} hexClicked={() => hexClicked(4, 2)} coords={[4, 2]}/>
                <Hexagon color={board[4][3]} hexClicked={() => hexClicked(4, 3)} coords={[4, 3]}/>
                <Hexagon color={board[4][4]} hexClicked={() => hexClicked(4, 4)} coords={[4, 4]}/>
                <Hexagon color={board[4][5]} hexClicked={() => hexClicked(4, 5)} coords={[4, 5]}/>
                <Hexagon color={board[4][6]} hexClicked={() => hexClicked(4, 6)} coords={[4, 6]}/>
                <Hexagon color={board[4][7]} hexClicked={() => hexClicked(4, 7)} coords={[4, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[5][0]} hexClicked={() => hexClicked(5, 0)} coords={[5, 0]}/>
                <Hexagon color={board[5][1]} hexClicked={() => hexClicked(5, 1)} coords={[5, 1]}/>
                <Hexagon color={board[5][2]} hexClicked={() => hexClicked(5, 2)} coords={[5, 2]}/>
                <Hexagon color={board[5][3]} hexClicked={() => hexClicked(5, 3)} coords={[5, 3]}/>
                <Hexagon color={board[5][4]} hexClicked={() => hexClicked(5, 4)} coords={[5, 4]}/>
                <Hexagon color={board[5][5]} hexClicked={() => hexClicked(5, 5)} coords={[5, 5]}/>
                <Hexagon color={board[5][6]} hexClicked={() => hexClicked(5, 6)} coords={[5, 6]}/>
                <Hexagon color={board[5][7]} hexClicked={() => hexClicked(5, 7)} coords={[5, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[6][0]} hexClicked={() => hexClicked(6, 0)} coords={[6, 0]}/>
                <Hexagon color={board[6][1]} hexClicked={() => hexClicked(6, 1)} coords={[6, 1]}/>
                <Hexagon color={board[6][2]} hexClicked={() => hexClicked(6, 2)} coords={[6, 2]}/>
                <Hexagon color={board[6][3]} hexClicked={() => hexClicked(6, 3)} coords={[6, 3]}/>
                <Hexagon color={board[6][4]} hexClicked={() => hexClicked(6, 4)} coords={[6, 4]}/>
                <Hexagon color={board[6][5]} hexClicked={() => hexClicked(6, 5)} coords={[6, 5]}/>
                <Hexagon color={board[6][6]} hexClicked={() => hexClicked(6, 6)} coords={[6, 6]}/>
                <Hexagon color={board[6][7]} hexClicked={() => hexClicked(6, 7)} coords={[6, 7]}/>
            </div>
            <div className='hex-row'>
                <Hexagon color={board[7][0]} hexClicked={() => hexClicked(7, 0)} coords={[7, 0]}/>
                <Hexagon color={board[7][1]} hexClicked={() => hexClicked(7, 1)} coords={[7, 1]}/>
                <Hexagon color={board[7][2]} hexClicked={() => hexClicked(7, 2)} coords={[7, 2]}/>
                <Hexagon color={board[7][3]} hexClicked={() => hexClicked(7, 3)} coords={[7, 3]}/>
                <Hexagon color={board[7][4]} hexClicked={() => hexClicked(7, 4)} coords={[7, 4]}/>
                <Hexagon color={board[7][5]} hexClicked={() => hexClicked(7, 5)} coords={[7, 5]}/>
                <Hexagon color={board[7][6]} hexClicked={() => hexClicked(7, 6)} coords={[7, 6]}/>
                <Hexagon color={board[7][7]} hexClicked={() => hexClicked(7, 7)} coords={[7, 7]}/>
            </div>
        </div>
    );
}
