import { useState, useEffect } from "react";

export default function Counter(props) {
  const { isFrozen, counter, setCounter, setIsFinished } = props;

  useEffect(() => {
    const newTime = counter - 1;
    counter > 0 && !isFrozen && setTimeout(() => setCounter(newTime), 1000);
    if (newTime === 0) {
      setIsFinished(true);
    }
  }, [counter, isFrozen, setCounter, setIsFinished]);

  return (
    <div className="App">
      <div>Countdown: {props.counter}</div>
    </div>
  );
}
