
//  useReducer hook is similiar to useState Hook
//  It allows for custom state logic
//  It is usefull when you want to keep track of multiple pieces of state that reply on complex logic
// so what is reducer in js just for understanding
// It takes in a bunch of things and returns one single thing

import { useReducer, useState } from "react";


// syntax
// useReducer(<reducer />, <initialState />)
// it take 2 arguemnts
// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
// It returns the current state and a dispatch method
const initialState = 0;
const CounterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "INCREMENT5":
            return state + action.value;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}
const Counter = () => {
    const [count, dispatch] = useReducer(CounterReducer, initialState)
    return (
        <>
            <h2>Simple COunter</h2> - Count {count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "INCREMENT5", value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    )
}

export default Counter;