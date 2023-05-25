import React from 'react';
import './style.css';
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  const int = useRef(null);

  const startTimer = () => {
    setIsActive(true);
  };
  const stopTimer = () => {
    setIsActive(false);
  };
  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
    // console.log(int.current)
  };

  useEffect(() => {
    if (isActive)
      int.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    else {
      clearInterval(int.current);
    }
    return () => clearInterval(int.current);
  }, [isActive]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{mins}:</span>
      <span>{secs}</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
