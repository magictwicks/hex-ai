import './css/hud.css'
import { Fragment } from "react"
import redHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-red.svg"
import blueHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg"
import Slider from "./Slider.js"

function turnHex(turn){
    return (turn === 1) ? blueHex : redHex;
}

export default function Hud({ showRules, turn, takeTurn, board, setBoard, setEdges, setWinner, setHUD}){	

  	return(
  	<Fragment>
			<button class="close" onClick={() => setHUD(false)}>X</button>
			<h1 class="title">HEX</h1>
			<button onClick={showRules} class="fancy">How To Play</button>
			<Slider setBoard={setBoard} setEdges={setEdges} takeTurn={takeTurn} setWinner={setWinner}></Slider>  
			<button onClick={
				() => {
				const currentSize = board.length;
				setBoard(Array(currentSize).fill(0).map(() => Array(currentSize).fill(0))); 
				setEdges(true);
				takeTurn(1); //Set turn to blue
				setWinner(0); //Make the board clickable again
				}} class="fancy">Reset Board</button>
			<img src={turnHex(turn)} alt="Failed to display"></img>
  	</Fragment>
    );
}
