import React, { useState } from 'react';
import { Range } from 'react-range';

const Slider = () => {
  const [values, setValues] = useState([8]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div>
      <div style={{ marginTop: '-25%'}}>
        Selected Value: {values[0]}
      </div>
      <Range
        values={values}
        step={1}
        min={0}
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
