import { useEffect, useState } from "react";

const useDebounce = ({ searchValue, delay }) => {
    const [debouncedInput, setDebouncedInput] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(searchValue)
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [searchValue, delay])
    return debouncedInput;
}

export default useDebounce;
