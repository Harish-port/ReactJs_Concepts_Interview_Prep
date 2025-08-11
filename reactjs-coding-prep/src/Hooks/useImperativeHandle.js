// useImperativeHandle hook lets you customize the handle exposed as a ref

// usage --- 
// Exposing a custom ref handle to the parent component;


///Lets create a fancyinput for understanding;

// Use forwardRef to pass ref properly
import React, { forwardRef, useImperativeHandle, useState } from 'react';

// Child component
const MyInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      // Imperative action: focus the input element
      document.getElementById('my-input').focus();
    },
    clearInput: () => {
      setValue('');
    },
    getCurrentValue: () => value,
  }));

  return (
    <input
      id="my-input"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

// Parent component
function App() {
  const inputRef = React.useRef();

  const handleFocus = () => {
    inputRef.current.focusInput();
  };

  const handleClear = () => {
    inputRef.current.clearInput();
  };

  const handleGetValue = () => {
    alert(`Current value: ${inputRef.current.getCurrentValue()}`);
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
      <button onClick={handleGetValue}>Get Value</button>
    </div>
  );
}
