import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); ///holds the value of the time
  const [isRunning, setIsRunning] = useState(false); /// tracks whether the timer is currently running
  const timerRef = useRef(null); /// stores the interval ID for clearing it when needed.

  const startTime = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isRunning && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    }
  };
  const resetTimer = () => {
    if (isRunning && timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setTime(0);
    }
  };
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <>
      <p>Timer</p>
      <p>{time}</p>

      <button onClick={startTime} style={{marginRight:"10px",padding:'10px'}} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} style={{marginRight:"10px",padding:'10px'}} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer} style={{padding:'10px'}}  disabled={!isRunning}>
        Reset
      </button>
    </>
  );
};

export default Timer;
