import "./App.css";
import React from "react";
import Optimization1 from "./Concepts/Optimization/Optimization1";
function App() {
  // Creating a function inside parent component
  const pullData = (data) => {
    console.log(data, "testing data");
  };

  return (
    <div className="App">
      <Optimization1 />
    </div>
  );
}

export default App;
