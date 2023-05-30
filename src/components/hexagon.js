import hex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com.svg'
import blueHex from'../svg/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg' 
import redHex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com-red.svg'
import { useState } from 'react'

function Hexagon( {blueTurn, takeTurn, color, setColor } ){
    
    const [hexImage, setHexImage] = useState(hex)
    
    function onClick(){
        if (blueTurn){
            takeTurn(false)
            setColor(1)
            setHexImage(blueHex)
        }
        else{
            takeTurn(true)
            setColor(-1)
            setHexImage(redHex)
        }
    }

    return(
        <img src={hexImage} alt="" class="hexagon" onClick={onClick}></img>
    );
    
}

export default function Board(){
    //const [board, setTile] = useState(Array.from({ length: 8 }, () => Array(8).fill(0))); 
    const [board, setTile] = useState(Array(9).fill(0))

    const [blueTurn, takeTurn] = useState(true)
    
    console.log(board)

    return(
        <div className="board">
            <div className='hex-row'>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][0]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][1]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][2]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][3]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][4]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][5]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][6]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0][7]} setColor={setTile}/>
            </div>
            
            <div className='hex-row'>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][0]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][1]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][2]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][3]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][4]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][5]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][6]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1][7]} setColor={setTile}/>
            </div>
            {/* <div class='hex-row'>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[0]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[1]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[2]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[3]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[4]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[5]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[6]} setColor={setTile}/>
                <Hexagon blueTurn={blueTurn} takeTurn={takeTurn} color={board[7]} setColor={setTile}/>
            </div> */}

        </div>
    );
}

