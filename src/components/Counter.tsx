import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [isDisabled, setDisable] = useState(true);
  const increment = () => {
    setCount(count + 1);
    setDisable(false);
  };
  const decrement = () => {
    setCount(count - 1);
    if (count === 0) setDisable(true);
    else setDisable(false);
  };
  const reset = () => {
    setCount(0);
    setDisable(true);
  };
  return (
    <div id="mainDiv">
      <div id="firstDiv">
        <h1>Count = {count}</h1>
      </div>

      <div id="secondDiv">
        <button onClick={() => decrement()} disabled={isDisabled}>
          Decrement
        </button>
        <button onClick={() => increment()}>Increment</button>
        <button
          onClick={() => {
            reset();
          }}
          disabled={isDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
