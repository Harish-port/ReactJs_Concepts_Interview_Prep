// Purpose: Stores a mutable reference that persists across renders without causing re-renders.

// Use Case: Accessing DOM elements, persisting values without re-render.
// Note: Starting with React 19, ref is available as a prop. In React 18 and earlier, it was necessary to get the ref from forwardRef.
import React, { useEffect, useRef, useState } from 'react'
import ThemeSwitcher from './ContextAPI/themeSwitcher';

function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <div>
            <ThemeSwitcher />
            <input type="text" onChange={(e) => setInputValue(e.target.value)} ref={inputRef} />
            {inputValue}
        </div>
    )
}

export default UseRefHook;