import './css/hud.css'
import { Fragment } from "react"
import redHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-red.svg"
import blueHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg"
import Slider from "./Slider.js"

function turnHex(turn){
    return (turn === 1) ? blueHex : redHex;
}

export default function Hud({ showRules, turn, takeTurn, setBoard, setEdges, setWinner}){

  return(
  <Fragment>
    <h1 class="title">HEX</h1>
      <Slider></Slider>  
      <button onClick={showRules}>How To Play</button>
      <button onClick={
        () => {
          setBoard(Array(8).fill(0).map(() => Array(8).fill(0))); 
          setEdges(true);
          takeTurn(1); //Set turn to blue
          setWinner(0); //Make the board clickable again
        }}>Reset Board</button>
    <img src={turnHex(turn)} alt="Failed to display"></img>
  </Fragment>
    );
}
