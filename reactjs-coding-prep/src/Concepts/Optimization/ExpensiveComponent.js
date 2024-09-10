import Reac, { memo } from "react";

function ExpensiveComponent({ count }) {
  console.log("teigger", count);

  return <div>ExpensiveComponent</div>;
}

export default memo(ExpensiveComponent);
