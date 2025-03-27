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


// ref
// Definition - A ref is an object that holds a reference to a DOM element or a component.

// forwardRef
// Definition - forwardRef allows a parent component to pass a ref to a child functional component.


// Syntax
const MyComponent = React.forwardRef((props, ref) => {...});


// Example of Passing ref to child component
import React, { useRef, forwardRef } from 'react';

//Child Component
const inputComponent = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />
})

//Parent Component
const ParentComponent = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <inputComponent ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}
export default ParentComponent;
