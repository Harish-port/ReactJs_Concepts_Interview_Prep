import "./App.css";
import React, { createContext } from "react";
import Optimization1 from "./Concepts/Optimization/Optimization1";
import ChildOne from "./Concepts/contextApi/ChildComponetContext/ChildOne";
function App() {
  const myContext = createContext();
  const value = { name: "Harish" };
  // Creating a function inside parent component
  const pullData = (data) => {
    console.log(data, "testing data");
  };

  return (
    <>
      <div className="App">
        <ChildOne />   
      </div>
    </>
  );
}

export default App;
