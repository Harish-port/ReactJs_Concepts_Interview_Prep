import React, { useEffect, useState } from 'react';
import './style.css'
const ProgressBarChild = ({ value = 0 }) => {

    const [percent, setPercent] = useState(value);
    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));
    }, [value]);
    return (
        <>
            <div className='progress1'>
                <span style={{ color: percent > 49 ? "white" : "black" }}>{percent.toFixed()}%</span>
                <div style={{ transform: `scaleX(${percent / 100})`, transformOrigin: "left" }} role="progressBar">
                </div>
            </div >
        </>
    )
}

const PracticeProgressBars = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            setValue((prev) => prev + 1)
        }, 100);
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div>
            <h1>Progress 1</h1>
            <ProgressBarChild value={value} />
        </div>
    )
}

export default PracticeProgressBars