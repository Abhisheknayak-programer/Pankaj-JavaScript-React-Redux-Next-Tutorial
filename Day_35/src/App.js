import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const IncreaseCounterHandler = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const DecreaseCounterHandler = () => {
    setCounter((prevValue) => prevValue - 1);
  };

  const ValueIncreaseBySevenTimes = () => {
    setCounter((prevValue) => prevValue * 7);
  };

  const ValueDivideByThreeTimes = () => {
    setCounter((prevValue) => prevValue / 3);
  };

  const InitialValueHandler = () => {
    setCounter(0);
  }

  return (
    <div className="counterCountainer">
      <h1>{counter}</h1>

      <div>
        <button onClick={IncreaseCounterHandler}>+</button>
        <button onClick={DecreaseCounterHandler}>-</button>
        <button onClick={ValueIncreaseBySevenTimes}>7X</button>
        <button onClick={ValueDivideByThreeTimes}>-3X</button>
        <button onClick={InitialValueHandler}>Init</button>
      </div>
    </div>
  );
}

export default App;
