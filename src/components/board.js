import './css/board.css'
import Hexagon from './hexagon.js';

const Color = {
    BLUE : 1,
    RED : -1 ,
    BLUE_PATH : 2,
    RED_PATH : -2 
} 


export default function Board({board, setBoard, turn, takeTurn, winner, setWinState, setEdges, showEdges}){
    const boardSize = board.length;

    function hexClicked(row, col){  

        // Don't do anything if the game is not going
        if (board[row][col] !== 0 || winner !== 0){
            return;
        }

        setEdges(false)
        // deep copy of 2d board array
        let newBoard = board.map((innerArray) => [...innerArray]);

        updateTiles(newBoard, row, col, turn);

        // re-renders the board
        setBoard(newBoard);
        takeTurn(turn * -1);

        //Checks for a winner
        for (let i = 0; i < boardSize; i++){
            if(newBoard[boardSize - 1][i] === Color.BLUE_PATH){
                setWinState(Color.BLUE);
                return;
            }
            if(newBoard[i][boardSize - 1] === Color.RED_PATH){
                setWinState(Color.RED);
                return;
            }
        }
    }

    const rowSizes = Array(boardSize * 2 - 1).fill(null).map((_, index) => boardSize - Math.abs(index - boardSize + 1));

    return (
        <div className="board">
            {rowSizes.map((numElementsInRow, indexVertical) => {
                const rowElements = Array(numElementsInRow).fill(null);
                return (
                    <div class="hex-row">
                        {rowElements.map((_, indexHorizontal) => { 
                            const row = (indexVertical > boardSize - 1) ? boardSize - 1 - indexHorizontal: indexVertical - indexHorizontal;
                            const col = (indexVertical > boardSize - 1) ? indexVertical - (boardSize - 1) + indexHorizontal : indexHorizontal;
                            return <Hexagon color={board[row][col]} hexClicked={() => hexClicked(row, col)} coords={[row, col]} showEdges={showEdges} boardSize={boardSize}/>; 
                        })}
                    </div>
                );
            })}
        </div>
    );

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
            return (item[0] >= 0 && item[0] < boardSize) && (item[1] >= 0 && item[1] < boardSize);
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
}
