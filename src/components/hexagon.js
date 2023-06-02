import hex from '../assets/hexagon-geometrical-shape-outline-svgrepo-com.svg'
import blueHex from'../assets/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg' 
import redHex from '../assets/hexagon-geometrical-shape-outline-svgrepo-com-red.svg'
import tRed from '../assets/transparent_red.svg'
import tBlue from '../assets/transparent_blue.svg'
import tPurp from '../assets/transparent_purple.svg'

export default function Hexagon( {color, hexClicked, coords, showEdges} ){ 
    
    function toImage(colorValue){
        if (colorValue > 0){
            return blueHex;
        }
        if (colorValue < 0){
            return redHex;
        }
        
        if (showEdges){    
            const corners = [
                "0,0",
                "0,7",
                "7,0",
                "7,7"  
            ];

            if (corners.includes(coords.toString())){
                return tPurp;
            }
            if (coords[0] === 0 || coords[0] === 7){
                return tBlue;
            }
            if (coords[1] === 0 || coords[1] === 7){
                return tRed;
            }
        }
        return hex;
    }
    return(
        <img src={toImage(color)} alt="" class="hexagon" onClick={hexClicked}></img>
    );
    
}
