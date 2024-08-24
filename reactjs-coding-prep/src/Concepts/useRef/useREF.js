import React, { useEffect } from "react";
import { useRef } from "react";

function UseREF() {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = useRef(null);
  return (
    <div>
      UseRef use case
      <input ref={inputRef} type="text" placeholder="Type something...." />
    </div>
  );
}
                                                                                                                                  
export default UseREF;
