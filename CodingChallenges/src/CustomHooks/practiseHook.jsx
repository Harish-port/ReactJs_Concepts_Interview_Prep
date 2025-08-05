import React, { useEffect } from 'react'

const PractiseHook = ( ref, outsudeClick ) => {
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref?.current?.contains(event.target)) {
                outsudeClick()
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [ref, outsudeClick])

}

export default PractiseHook;
