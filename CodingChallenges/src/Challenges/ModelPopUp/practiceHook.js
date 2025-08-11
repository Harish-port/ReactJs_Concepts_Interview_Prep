import React, { useEffect } from 'react'

const practiceHook = ({ ref, setIsOpen }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen()
            }

        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [ref, setIsOpen])
}

export default practiceHook