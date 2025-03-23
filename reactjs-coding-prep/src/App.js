import "./App.css";
import React from "react";
import UseRefHook from "./Hooks/useRef";
import Counter from "./Hooks/useReducer";
function App() {
  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  );
}
export default App;
