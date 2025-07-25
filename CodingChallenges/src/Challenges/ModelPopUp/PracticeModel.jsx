import React, { useEffect, useRef, useState } from 'react'
const useClickOutside = (ref, onOutsideClick) => {
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick()
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [ref])
}
function PracticeModel() {
    const [isOpen, setIsOpen] = useState(false);
    const modelRef = useRef();
    useClickOutside(modelRef, () => setIsOpen(false))
    return (
        <div>
            <h2>Practice model </h2>
            <button onClick={() => setIsOpen(true)}>Open Model</button>
            {isOpen && (
                <div style={overLayStyle}>
                    <div ref={modelRef} style={modelStyle}>
                        <h2>Model Header</h2>
                        <p>THis is model body</p>
                        <button style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}
const overLayStyle = {
    position: 'fixed',
    width: '100vw',
    height: "100vh",
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
}
const modelStyle = {
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    padding: "20px 40px",
    textAlign: "center"
}



export default PracticeModel;

