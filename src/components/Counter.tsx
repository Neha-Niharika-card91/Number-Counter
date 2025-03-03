import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div id="mainDiv">
      <div id="firstDiv">
        <h1>Count = {count}</h1>
      </div>

      <div id="secondDiv">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
