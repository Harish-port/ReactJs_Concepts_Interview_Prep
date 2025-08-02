import React, { useState } from 'react'

function PracticeChip() {
    const [inputValue, setInputValue] = useState('');
    const [chipsText, setChipsText] = useState([]);
    const handleInputCHange = (e) => {
        setInputValue(e.target.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const chipText = inputValue.trim();
            if (chipText === "") return;
            setChipsText([...chipsText, chipText])
            setInputValue("")
        }
    }
    const handleDelete = (selectedChip) => {
        setChipsText(chipsText.filter((chip) => chip !== selectedChip))
    }
    console.log(chipsText);
    
    return (
        <div>
            <h1>Practise</h1>
            <input type="text" placeholder='enter text and hit entersr' value={inputValue} onKeyDown={handleKeyPress} onChange={handleInputCHange} />
            {
                chipsText.map((chip, index) => (
                    <div key={index}>
                        {chip}
                        <span onClick={() => handleDelete(chip)}>X</span><br />
                    </div>
                ))
            }
        </div>
    )
}

export default PracticeChip