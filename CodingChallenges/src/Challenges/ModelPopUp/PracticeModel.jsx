import React, { useRef, useState } from 'react'
import practiceHook from './practiceHook';

function PracticeModel() {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen, "<<<");
    const modelRef = useRef();
   practiceHook(modelRef,()=>setIsOpen(false))
    return (
        <div>
            <h1>
                PracticeModel
            </h1>
            <button onClick={() => setIsOpen(true)}>Open Model</button>
            {
                isOpen &&
                (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, zIndex: 1000, height: "100vh", display: "flex", justifyContent: "center", textAlign: "center",
                        alignItems: 'center',
                        width: "100vw", backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <div  ref={modelRef}  style={{ zIndex: 1000, padding: "10px", background: 'white' }}>
                            <h2>Model Header</h2>
                            <p>THis is the modal body</p>
                            <button onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default PracticeModel