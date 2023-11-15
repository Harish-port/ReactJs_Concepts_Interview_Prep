import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../Redux/Actions/counterActions";
function CounterApp() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  const increment = () => {
    dispatch(incrementCounter());
  };
  const decrement = () => {
    dispatch(decrementCounter());
  };
  const reset = () => {
    dispatch(resetCounter());
  };
  // Using useReducer
  //  const [state, dispatch] = useReducer(counterReducer,counter);
  return (
    <div>
      <h1>Counter App1</h1>
      <h2>{counter.count}</h2>
      <h2>{counter.error}</h2>
      <h3>Increment Value</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
