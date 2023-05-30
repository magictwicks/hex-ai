import hex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com.svg'
import blueHex from'../svg/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg' 
import redHex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com-red.svg'
import { useState } from 'react'

export default function Hexagon( {blueTurn, takeTurn, color, setColor, hexClicked} ){ 
    

    return(
        <img src={hex} alt="" class="hexagon" onClick={hexClicked}></img>
    );
    
}