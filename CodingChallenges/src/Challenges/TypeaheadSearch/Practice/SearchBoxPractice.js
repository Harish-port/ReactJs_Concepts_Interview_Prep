import { useEffect, useState } from 'react';
import useDebounce from '../useDebounce';
import './style.css';

export default function SearchBoxPractice() {
    const [inputText, setInputText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [results, setResults] = useState([])
    const [cache, setCache] = useState({})
    const debouncedInput = useDebounce(inputText, 500);

    const fetchData = async () => {
        if (debouncedInput.trim() === "") {
            setResults([])
            return;
        }
        if (cache[debouncedInput]) {
            setResults(cache[debouncedInput]);
            return;
        }
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${debouncedInput}`);
        const json = await data.json();
        setResults(json.recipes);
        setCache((prev) => ({ ...prev, [debouncedInput]: json.recipes || [] }))
    }

    const handleKeyPress = (e) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
        } else if (e.key === "Enter" && selectedIndex !== -1) {
            setInputText(results[selectedIndex].name);
        }

    }

    useEffect(() => {
        const result = setTimeout(() => {
            fetchData();
        }, 100);
        return () => {
            clearTimeout(result)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedInput]);

    return (
        <>
            <div className="wrapper" style={{ display: "flex", justifyContent: 'center', flexDirection: "column", textAlign: "center" }}>
                <h1>Auto complete practice</h1>
                <input type="text" value={inputText} onKeyDown={handleKeyPress} onChange={(e) => { setInputText(e.target.value); setSelectedIndex(-1); }} placeholder='Enter the text' style={{ width: "450px", height: "30px" }} />
                {results.length > 0 && <div style={{ padding: "5px", maxHeight: "400px", height: "auto", overflow: "auto", width: "445px", border: "1px solid grey", textAlign: 'left' }}>
                    {results.map((result, index) => (
                        <div className='results-details' key={result.id} style={{ padding: "5px", cursor: "pointer", backgroundColor: `${selectedIndex === index ? "lightgray" : ""}` }}>
                            {result.name}
                        </div>
                    ))}
                </div>}
            </div>
        </>
    )
}
