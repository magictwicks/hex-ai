import './css/game.css'
import Board from "./board";
import Hud from "./hud.js";
import Modal from "./modal";
import Rules from "./rules";
import DisplayMenu from "./mob_display_menu";
import {BrowserView, MobileView} from 'react-device-detect';
import { useState, Fragment} from "react";

function winnerString(winner){
    return (winner === 1) ? "Blue Won!" : "Red Won!";
}

export default function Game (){

    const boardSize = 8
    const [show, setVisible] = useState(false);
    const [winner, setWinner] = useState(0)
    const [board, setBoard] = useState(Array(boardSize).fill(0).map(() => Array(boardSize).fill(0)));
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
        <Fragment>
            <BrowserView>
                <div class="game-container">
                    <div class="hud-container">
                        <Hud showRules={showModal} turn={turn} takeTurn={takeTurn} board={board} setBoard={setBoard} setEdges={setEdges} setWinner={setWinner}/>
                    </div>
                    <div class="desktop board-container">
                        <Board board={board} setBoard={setBoard} turn={turn} takeTurn={takeTurn} winner={winner} setWinState={setWinner} setEdges={setEdges} showEdges={showEdges} boardSize={boardSize}/>
                    </div>
                    <Modal content={<Rules/>} show={show} hideModal={hideModal} /> 
                    <Modal content={<p>{winnerString(winner)}</p>} show={winner} hideModal={hideModal} />
                </div>
            </BrowserView>
            <MobileView>
                <div class='mobile game-container'>
                    <DisplayMenu/>
                    <div class="mobile hud-container">
                        <Hud showRules={showModal} turn={turn} takeTurn={takeTurn} board={board} setBoard={setBoard} setEdges={setEdges} setWinner={setWinner}/>
                    </div>
                    <div class="mobile board-container">
                        <Board board={board} setBoard={setBoard} turn={turn} takeTurn={takeTurn} winner={winner} setWinState={setWinner} setEdges={setEdges} showEdges={showEdges} boardSize={boardSize}/>
                    </div>
                </div> 
            </MobileView>
        </Fragment>

    );
}
