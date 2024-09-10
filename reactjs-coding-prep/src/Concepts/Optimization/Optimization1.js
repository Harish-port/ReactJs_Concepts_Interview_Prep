import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

function Optimization1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        You can prevent unnecessary re-renders of ExpensiveComponent by using
        React.memo to memoize it, so that it only re-renders when its props
        change, not when the parent component re-renders.
      </p>
      <p>
        By wrapping ExpensiveComponent in memo, it will skip rendering unless
        its props change.
      </p>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      {/* {children} */}
      <ExpensiveComponent count={count}/>
    </div>
  );
}

export default Optimization1;
