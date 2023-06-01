export default function Rules () {
    return (
        <div class="rules">
            <h2>Hex Rules:</h2>
            <ol>
                <li>Each player will have a color, either red or blue.</li>
                <li>Blue moves first.</li>
                <li>Every turn a player will claim an empty square for their color.</li>
                <li>Two hexagons are considered connected if they are of the same color and share an edge.</li>
                <li>Blue wins if they create a connected path of hexagons from the top edge of the board to the bottom.</li>
                <li>Red wins if they create a connected path of hexagons from the left edge to the right.</li>
            </ol>
        </div>
    )
}
