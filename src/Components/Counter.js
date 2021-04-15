import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `We clicked on the counter ${count} times`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count && setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span> {count} </span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
