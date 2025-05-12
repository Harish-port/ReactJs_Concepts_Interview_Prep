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
        id="testBgColor"
        style={{
          width: `${progress}%`,
          height: '30px',
          backgroundColor: getColor(progress),
          transition: 'width 0.3s ease, background-color 0.3s ease'
        }}
      />
      <p style={{ marginTop: '10px' }}>{progress}%</p>
      <div>
        <button onClick={() => handleChange(10)} style={{ marginRight: '10px' }}>
          +10%
        </button>
        <button onClick={() => handleChange(-10)}>-10%</button>
      </div>
    </div>
  );
};

export default ProgressBar2;
