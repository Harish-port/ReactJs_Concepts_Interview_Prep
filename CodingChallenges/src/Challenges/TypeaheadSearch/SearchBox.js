import React, { useEffect, useState } from "react";
import "./style.css";
import useDebounce from "./useDebounce";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debouncedInput = useDebounce(input,300)
  const fetchData = async () => {
      if (debouncedInput.trim() === "") {
        setResults([]);
        return;
      }
    if (cache[debouncedInput]) {
      setResults(cache[debouncedInput]);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${debouncedInput}`);
    const json = await data.json();
    setResults(json?.recipes || []);
    setCache((prev) => ({ ...prev, [debouncedInput]: json?.recipes || [] }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [debouncedInput]);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      setInput(results[selectedIndex].name);
      setShowResults(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="search-box-container">
      <h1>AutoComplete Search Box</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)} // Prevent losing focus immediately
        onChange={(e) => {
          setInput(e.target.value);
          setSelectedIndex(-1); // Reset selection on input change
        }}
        onKeyDown={handleKeyDown}
      />
      {showResults && results.length > 0 && (
        <div className="results-container">
          {results.map((result, index) => (
            <span
              key={result.id}
              className={`result ${selectedIndex === index ? "active" : ""}`}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseDown={() => {
                setInput(result.name);
                setShowResults(false);
              }}
            >
              {result.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
