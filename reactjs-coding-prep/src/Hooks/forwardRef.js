// forwardRef is a utility function that allows a parent component to forward a ref it created down to a child component, 


import React, { useRef, forwardRef } from 'react';

// Child component that forwards the ref
const MyInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

// Parent component that uses the forwarded ref
function MyForm() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput placeholder="Enter text" ref={inputRef} />
      <button onClick={handleFocusInput}>Focus Input</button>
    </div>
  );
}