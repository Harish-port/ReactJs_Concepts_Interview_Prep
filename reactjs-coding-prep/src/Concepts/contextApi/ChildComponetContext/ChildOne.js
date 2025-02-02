import React from "react";
import ChildTwo from "../SecondChildComponentContext/ChildTwo";

function ChildOne() {
  return (
    <div>
      ChildOne // redering ChildTwo
      <ChildTwo />
    </div>
  );
}

export default ChildOne;
