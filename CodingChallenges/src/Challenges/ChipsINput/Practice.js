import React, { useState } from 'react'

function PracticeChips() {

    let predefinedSTr = 'Harish'
    const [dispalyStr, setDispalyStr] = useState([])
    const handleClick = () => {
        if (predefinedSTr.length !== dispalyStr.length) {
            let count = dispalyStr.length + 1;
            let temp = predefinedSTr.slice(0, count).split("");
            setDispalyStr(temp)
            console.log(temp);
        }

    }
    return (
        <div>
            <h2>Print the string</h2>
            <button onClick={handleClick}>Click here!!</button>
            {dispalyStr.map((distr, index) => (
                <span key={index}>
                    {distr}
                    {index !== dispalyStr.length - 1 && ","}
                </span>
            ))}
        </div>
    )
}

export default PracticeChips