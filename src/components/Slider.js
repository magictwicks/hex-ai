import React, { useState } from 'react';
import { Range } from 'react-range';
import './css/slider.css'

function Slider ({setBoard, setEdges, takeTurn, setWinner}) {
  const [values, setValues] = useState([8]);

  const handleChange = (newValues) => {
    const newBoard = Array(newValues[0]).fill(0).map(() => Array(newValues[0]).fill(0));
    setValues(newValues);
    setBoard(newBoard);
    setEdges(true);
    setWinner(0);
    takeTurn(1);
    document.documentElement.style.setProperty('--hex-size', `${120.0 / (2 * newValues[0])}vh`);
  };

  return (
    <div>
      <div class="slider-text">
        Board Size: {values[0] + "x" + values[0]}
      </div>
      <Range
        values={values}
        step={1}
        min={1}
        max={12}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ddd',
              borderRadius: '3px',
              marginTop: '10px',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
            }}
          />
        )}
      />
    </div>
  );
};

export default Slider;
