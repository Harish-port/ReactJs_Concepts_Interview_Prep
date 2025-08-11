import React, { useState } from 'react'

export default function PracticeProgressBar2() {
    const [progress, setProgress] = useState(0);

    const getColor = (value) => {
        if (value < 40) return 'red'
        if (value < 80) return 'orange';
        return 'green'
    }
    const handleClick = (percentage) => {
        setProgress((prev) => {
            return Math.min(100, Math.max(0, prev + percentage))
        })
    }
    return (
        <div>
            <h1>Progress2</h1>
            <div>
                <div style={{
                    border: "1px solid black",
                    width: "500px",
                    height: "20px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative"
                }}>
                    <div style={{
                        width: `${progress}%`,
                        backgroundColor: getColor(progress),
                        height: "100%",
                        transition: 'width 0.3s ease, background-color 0.3s ease'
                    }}></div>

                    <span style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'black'
                    }}>
                        {progress}%
                    </span>
                </div>

                <div style={{ marginTop: '10px' }}>
                    <button onClick={() => handleClick(10)}>+10%</button>
                    <button onClick={() => handleClick(-10)}>-10%</button>
                </div>
            </div>
        </div>
    )
}
