import { useState } from "react";

const ChipsInputE = () => {
    const [inputValue, setInputValue] = useState("");
    const [chipValues, setChipValues] = useState([]);

    const handleChipInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            const trimmedValue = inputValue.trim();
            if (trimmedValue && !chipValues.includes(trimmedValue)) {
                setChipValues([...chipValues, trimmedValue])
            }
            setInputValue("")
        }
    }
    const handleDelete = (selectedIndex) => {
        setChipValues(chipValues.filter(chip => chip !== selectedIndex))
    }
    return (
        <>
            <h1>Chips Input</h1>
            <div className="wrapper" style={{ display: "flex", justifyContent: "center" }} >
                <input type="text" style={{ height: '35px', width: "250px" }} value={inputValue} placeholder="Enter the text" onChange={(e) => handleChipInput(e)} onKeyDown={handleKeyPress} /><br />
                {chipValues.map((chips, index) => (
                    <div style={{ border: "1px solid gray", display: "flex", justifyContent: 'center', alignItems: "center", backgroundColor: "lightgray", borderRadius: "10px", height: "35px", padding: "5px" }} key={index}>
                        <p style={{ height: "100%" }}>{chips}</p>
                        <span onClick={() => handleDelete(chips)}>X</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChipsInputE