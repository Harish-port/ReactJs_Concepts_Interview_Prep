import React, { useState, useRef } from 'react';
import useClickOutside from '../../CustomHooks/useClickOutside';

const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    // Close modal when clicking outside
    useClickOutside(modalRef, () => setIsOpen(false));

    return (
        <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'Arial' }}>
            <h2>Modal Popup Example</h2>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            {isOpen && (
                <div style={overlayStyle}>
                    <div ref={modalRef} style={modalStyle}>
                        <h2>Modal Header</h2>
                        <p>This is the modal body</p>
                        <button onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const modalStyle = {
    background: 'white',
    padding: '20px 40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    textAlign: 'center',
};

export default ModalExample;
