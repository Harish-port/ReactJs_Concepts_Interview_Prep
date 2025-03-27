import { forwardRef, useImperativeHandle, useRef, useState } from "react"

const FancyInput = forwardRef(( props, ref )=> {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        clear: () => {
            inputRef.current.value = ''
        }
    }))

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef} />
            {inputValue}
        </>
    )
});
export default FancyInput;
