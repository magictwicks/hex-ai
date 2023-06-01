import Board from "./board";
import Hud from "./hud.js";
import Modal from "./modal";
import Rules from "./rules";

import { useState } from "react";

export default function Game (){
    const [show, setVisible] = useState(false);
    const [hasWon, setWinner] = useState(false)
    const [showEdges, setEdges] = useState(true)

    // sets rules modal to show or not
    function showModal() {
        setVisible(true)
    }

    function hideModal (){
        setVisible(false)
        setWinner(false)
    }


    return (
        <div class="game-container">
            <div class="hud-container" onMouseOver={() => setEdges(true)} onMouseLeave={() => setEdges(false)}>
                <Hud showRules={showModal}/>
            </div>
            <div class="board-container">
                <Board setWinState={setWinner} showEdges={showEdges}/>
            </div>
            <Modal content={<Rules/>} show={show} hideModal={hideModal} /> 
            <Modal content={<p>Someone Won</p>} show={hasWon} hideModal={hideModal} />
        </div>
    );
}
