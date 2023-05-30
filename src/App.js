// import logo from './logo.svg';
import Board from './components/hexagon.js'
import './App.css';
import hex from './svg/hexagon-geometrical-shape-outline-svgrepo-com.svg'
// import { useState } from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Board />
                <div className="board">
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                    <div className="hex-row">
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    <img src={hex} alt="" class="hexagon"></img>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
