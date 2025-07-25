import { useState } from "react";

const useToggle = (intialValue = false) => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

export default useToggle;

//Usage

const [isOpen, toggleOpen] = useToggle();
return (
  <div>
    <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
    {isOpen && <>Content is visible</>}
  </div>
);
