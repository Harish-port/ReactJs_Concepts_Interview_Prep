import "./App.css";
import React from "react";
import Child from "./Pass_Props_Child_To_Parent/Child";
import CounterApp from "./Redux_Counter_App/CounterApp";
import Tester from "./Testing_Jest_Enzyme/Tester";
import UseReducerHook from "./UseReducer/useReducerHook";
import Debounce from "./Debouce_Concept/Debounce";
import { Suspense } from "react";
import UseREF from "./useRef/useREF";
import Wrapper from "./ContextAPI/Wrapper";
const LazyLoading = React.lazy(() => import("./LazyLoading/lazyLoading"));

function App() {
  // Creating a function inside parent component
  const pullData = (data) => {
    console.log(data, "testing data");
  };

  return (
    <div className="App">
      <Tester initialValue={0} />
      {/* passing props to child component */}
      <Child props={pullData} />
      {/* useReducer use case implementation */}
      <UseReducerHook />
      {/* Redux implementation - a simple counter app */}
      {/* <CounterApp/> */}
      {/* Debounce concept */}
      <Debounce />
      {/* Lazy Loading */}
      <Suspense fallback={<div>Loading....</div>}>
        <LazyLoading />
      </Suspense>
      <UseREF />
      <Wrapper />
      <h1>Tester</h1>
      <h1>Tester</h1>
      <h1>Tester</h1>
      <h1>Tester 2</h1>
      
    </div>
  );
}

export default App;
