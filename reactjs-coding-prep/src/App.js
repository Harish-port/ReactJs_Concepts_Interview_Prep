// import "./App.css";
import React, { useRef } from "react";
import UseImperativeHook from "./Hooks/useImperativeHandle";
import FancyInput from "./Hooks/Practicss";
function App() {
  const fancyInputRef = useRef();
  return (
    <>
      <div className="App">
        {/* <UseImperativeHook ref={fancyInputRef}/>
         */}

        <FancyInput ref={fancyInputRef} />
         <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
         <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
      </div>
    </>
  );
}

export default App;
