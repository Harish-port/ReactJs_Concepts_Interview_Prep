import React, { useState } from 'react';

const CollapsibleDropdowns = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdowns = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  ];

  const parentStyle = {
    backgroundColor: 'blue',
    position: 'relative',
    overflow: 'hidden',
  };
  const parentStyle1 = {
    backgroundColor: 'blue',
    position: 'relative',
    overflow: 'hidden',
  };
  return (
    <div style={parentStyle1}>

    <div className="parent" style={parentStyle}>
      {dropdowns.map((content, index) => (
        <div key={index}>
          <div
            className={`toggle-btn ${openDropdown === index ? 'active' : ''}`}
            onClick={() => toggleDropdown(index)}
            style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f1f1f1' }}
          >
            {`Dropdown ${index + 1} `}
            <span className="arrow">{openDropdown === index ? '▲' : '▼'}</span>
          </div>
          <div
            className={`collapsible ${openDropdown === index ? 'active' : ''}`}
            style={{
              display: openDropdown === index ? 'block' : 'none',
              transition: 'height 0.3s ease',
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CollapsibleDropdowns;
