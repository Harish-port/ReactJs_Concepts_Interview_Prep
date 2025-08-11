import React, { useState } from "react";
const  ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !chips.includes(trimmedValue)) {
        setChips([...chips, trimmedValue]);
      }
      setInputValue("");
    }
  };

  const handleDeleteChip = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px" }}>
      <h2>Chips Input</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px", maxWidth: "300px" }}>
        {chips.map((chip, index) => (
          <div key={index} style={{ padding: "8px", background: "#eee", borderRadius: "16px", display: "flex", alignItems: "center" }}>
            {chip}
            <button
              onClick={() => handleDeleteChip(chip)}
              style={{
                marginLeft: "8px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                fontSize: "12px",
                lineHeight: "20px",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip and press Enter"
        style={{ padding: "8px", width: "200px" }}
      />
    </div>
  );
}

export default ChipsInput;
