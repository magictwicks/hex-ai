import Board from "./board";
import Hud from "./hud.js";
import Modal from "./modal";
import Rules from "./rules";

import { useState } from "react";

export default function Game (){
  const [show, setVisible] = useState(false)

  // sets rules modal to show or not
  function showRules() {
    setVisible(true)
  }

  function hideRules (){
    setVisible(false)
  }
  
  return (
    <div class="game-container">
      <div class="hud-container">
        <Hud showRules={showRules}/>
      </div>
      <div class="board-container">
        <Board />
      </div>
      <Modal content={<Rules/>} show={show} hideModal={hideRules} /> 
    </div>
  );
}