
import { useEffect, useState } from 'react';
import ProgressBarChild from "./ProgressBarChild";
import "./style.css";

const ProgressBarParent = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1)
    }, 100)
  }, [])
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBarChild value={value} />
    </div>
  );
};

export default ProgressBarParent;
