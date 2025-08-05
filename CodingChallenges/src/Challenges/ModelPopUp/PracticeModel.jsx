import React, { useRef, useState } from 'react'
import practiseHook from '../../CustomHooks/practiseHook';

export default function PracticeModel() {
    const [isOpen, setIsOpen] = useState(false);
    const modelRef = useRef();
    practiseHook(modelRef, () => setIsOpen(false))
    return (
        <div>
            <h1>
                Modal PopUp Example
            </h1>
            <div>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
            </div>
            {
                isOpen && (
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: "center", alignItems: "center", zIndex: 1000, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                        <div ref={modelRef} style={{ padding: "20px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", textAlign: "center", backgroundColor: "white", borderRadius: "10px" }} >
                            <h2>Modal Header</h2>
                            <p>This is the modal body</p>
                            <button onClick={() => setIsOpen(false)}>close</button>
                        </div>

                    </div>
                )}
        </div >
    )
}
