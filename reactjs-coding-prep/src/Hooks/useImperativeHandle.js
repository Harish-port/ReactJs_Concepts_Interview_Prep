// useImperativeHandle hook lets you customize the handle exposed as a ref

// usage --- 
// Exposing a custom ref handle to the parent component;


///Lets create a fancyinput for understanding;
import React, { useImperativeHandle, useRef, useState, forwardRef } from 'react';

// Use forwardRef to pass ref properly
const UseImperativeHook = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            setInputValue("");  // This will also clear the state
            inputRef.current.value = ""; // Clears the input field
        }
    }));

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
            />
            <p>{inputValue}</p>
        </div>
    );
});

export default UseImperativeHook;
