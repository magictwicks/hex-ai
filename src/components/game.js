import Board from "./board";
import Hud from "./hud.js";
import Modal from "./modal";
import Rules from "./rules";

import { useState } from "react";

function winnerString(winner){
    return (winner === 1) ? "Blue Won!" : "Red Won!";
}

export default function Game (){
    const [show, setVisible] = useState(false);
    const [winner, setWinner] = useState(false)
    const [board, setBoard] = useState(Array(8).fill(0).map(() => Array(8).fill(0)));
    const [turn, takeTurn] = useState(1); //1 Corresponds to Blue moving first
    const [showEdges, setEdges] = useState(true);


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
            <div class="hud-container">
                <Hud showRules={showModal} turn={turn} setBoard={setBoard} setEdges={setEdges}/>
            </div>
            <div class="board-container">
                <Board board={board} setBoard={setBoard} turn={turn} takeTurn={takeTurn} setWinState={setWinner} setEdges={setEdges} showEdges={showEdges}/>
            </div>
            <Modal content={<Rules/>} show={show} hideModal={hideModal} /> 
            <Modal content={<p>{winnerString(winner)}</p>} show={winner} hideModal={hideModal} />
        </div>
    );
}
