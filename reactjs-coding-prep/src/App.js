// import "./App.css";
import React, { useRef } from "react";
import UseImperativeHook from "./Hooks/useImperativeHandle";
import FancyInput from "./Hooks/Practicss";
import Child from "./Concepts/Pass_Props_Child_To_Parent/Child";
import CounterApp from "./Redux_Counter_App/CounterApp";

function App() {
  const fancyInputRef = useRef();
  const handleChild = (data) => {
    console.log(data);
  }
  
  return (
    <>
      <div className="App">
        {/* <UseImperativeHook ref={fancyInputRef}/>
         */}
        {/* <FancyInput ref={fancyInputRef} />
         <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
         <button onClick={() => fancyInputRef.current.clear()}>Clear</button> */}
      </div>
      <Child setTest={handleChild} />
      <CounterApp />
    </>
  );
}

export default App;
