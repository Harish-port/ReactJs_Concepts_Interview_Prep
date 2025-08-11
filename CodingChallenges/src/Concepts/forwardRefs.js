import React from 'react'
import { forwardRef } from 'react'
import { useRef } from 'react'

///Parent Component




const ForwardRefs = forwardRef((props, ref) => {
    return (
        <input type="text" {...props} ref={ref} />
    )
})
const ParentCompoennt = () => {
    const inputRef = useRef();
    const handleFocusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <>
            <ForwardRefs placeholder="Enter Text" ref={inputRef} />
            <button onClick={handleFocusInput}></button>
        </>
    )
}
export default ParentCompoennt