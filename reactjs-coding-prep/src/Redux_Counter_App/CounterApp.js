import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter,decrementCounter, resetCounter } from '../Redux/Actions/counterActions';
function CounterApp() {
  const dispatch = useDispatch();
 
  const counter = useSelector((state)=>state.count);
  console.log(counter);
  const increment = () => {
    dispatch(incrementCounter())
  }
  const decrement = () => {
    dispatch(decrementCounter())
  }
  const reset = () => {
    dispatch(resetCounter())
  }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <h3>Increment Value</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterApp