import { useState } from "react"

const ChipsInputE = () => {
    const [chips, setChipsInput] = useState([]);
    const [inputValues, setInputValues] = useState('')
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const trimmedValue = inputValues.trim();
            if (trimmedValue && !chips.includes(trimmedValue)) {
                setChipsInput([...chips, trimmedValue])
            }
        }
    }
    const handleChipDelte = (selectedChip) => {
        setChipsInput(chips.filter((chip) => chip !== selectedChip))
    }
    return (<>
        <h1>Chips Input</h1>
        <input type="text" onKeyDown={handleKeyPress} onChange={(e) => setInputValues(e.target.value)} />
        {chips.map((chip, index) => (
            <>
                <div>{chip}</div>
                <div onClick={() => handleChipDelte(chip)} style={{ cursor: 'pointer' }}>X</div>
            </>
        ))}
    </>)
}

export default ChipsInputE