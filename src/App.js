// import logo from './logo.svg';
import './App.css';
import hex from './hexagon-geometrical-shape-outline-svgrepo-com.svg'
// import { useState } from 'react';

function MyButton(){
    return(
    <button>This is my button</button>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
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
