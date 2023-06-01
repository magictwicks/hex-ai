import { Fragment } from "react"
import redHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-red.svg"
import blueHex from "../assets/hexagon-geometrical-shape-outline-svgrepo-com-blue.svg"

function turnHex(turn){
    return (turn === 1) ? blueHex : redHex;
}

export default function Hud({ showRules, turn }){

  return(
  <Fragment>
    <h1 class="title">HEX</h1>
    <button onClick={showRules}>How To Play</button>
    <button>Reset Board</button>
    <img src={turnHex(turn)} alt="Failed to display"></img>
  </Fragment>
    );
}
