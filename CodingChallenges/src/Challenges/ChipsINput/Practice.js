import { useState } from "react";

export default function PracticeChips() {
    const [inputValue, setInputValue] = useState("");
    const [chips, setChips] = useState([]);
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            const trimmedValue = inputValue.trim();
            if (trimmedValue) {
                setChips([...chips, inputValue]);
            }
            setInputValue("")
        }
    };
    const handleChipDelete = (selectedChip) => {
        setChips(chips.filter((chip => chip !== selectedChip)))
    }
    return (
        <div className="App">
            <input
                type="text"
                placeholder="Enter text"
                onKeyDown={handleSubmit}
                value={inputValue}
                onChange={handleInput}
            />
            {chips.map((chip, index) => (
                <div key={index}>
                    <span>
                        {chip}
                    </span><span onClick={() => handleChipDelete(chip)}>x</span>
                </div>
            ))}
        </div>
    );
}
