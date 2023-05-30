import hex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com.svg'
import blueHex from'../svg/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg' 
import redHex from '../svg/hexagon-geometrical-shape-outline-svgrepo-com-red.svg'
import { useState } from 'react'

export default function Hexagon( {color, hexClicked} ){ 
    
    function toImage(colorValue){
        if (colorValue > 0){
            return blueHex;
        }
        if (colorValue < 0){
            return redHex;
        }
        else {
            return hex;
        }
    }
    return(
        <img src={toImage(color)} alt="" class="hexagon" onClick={hexClicked}></img>
    );
    
}
