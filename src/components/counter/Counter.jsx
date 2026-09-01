import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((p) => p + 1);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    setCount((p) => p - 1);
  };
  return (
    <>
      <div className="counter">
        <div className="countValue">{count}</div>
        <div className="counterButtons">
          <button onClick={handleIncrement}>increment</button>
          <button onClick={handleDecrement} disabled={count === 0}>
            decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
