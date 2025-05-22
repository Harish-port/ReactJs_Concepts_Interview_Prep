import React, { useState } from 'react';

const ProgressBar2 = () => {
  const [progress, setProgress] = useState(0);

  const getColor = (value) => {
    if (value < 40) return 'red';
    if (value < 80) return 'orange';
    return 'green';
  };

  const handleChange = (delta) => {
    setProgress((prev) => {
      const newValue = Math.min(100, Math.max(0, prev + delta));
      return newValue;
    });
  };

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <div
        style={{
          backgroundColor: 'lightgray',
          height: '30px',
          width: '100%',
          borderRadius: '5px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          id="testBgColor"
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: getColor(progress),
            transition: 'width 0.3s ease, background-color 0.3s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black', // Use white if progress color is too dark
            fontWeight: 'bold'
          }}
        >
          {progress}%
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleChange(10)} style={{ marginRight: '10px' }}>
          +10%
        </button>
        <button onClick={() => handleChange(-10)}>-10%</button>
      </div>
    </div>
  );
};

export default ProgressBar2;
