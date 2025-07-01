// import { useDispatch, useSelector } from "react-redux";
// import {
//   incrementCounter,
//   decrementCounter,
//   resetCounter,
// } from "../Redux/Actions/counterActions";
// function CounterApp() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state);
//   const increment = () => {
//     dispatch(incrementCounter());
//   };
//   const decrement = () => {
//     dispatch(decrementCounter());
//   };
//   const reset = () => {
//     dispatch(resetCounter());
//   };
//   // Using useReducer
//   //  const [state, dispatch] = useReducer(counterReducer,counter);
//   return (
//     <div>
//       <h1>Counter App1</h1>
//       <h2>{counter.count}</h2>
//       <h2>{counter.error}</h2>
//       <h3>Increment Value</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
// export default CounterApp;

import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../Hooks/ContextAPI/ThemeContext/ThemeContext';
import LoginForm from '../Testing/LoginForm';

function CounterApp() {
  const count = useSelector(state => state.count);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
      <h1>Current theme: {theme}</h1>
      {count}
      <LoginForm/>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
    </div>
  )
}

export default CounterApp