import Calc from "./Calculation";
import "./styles.css";
import React, { useCallback, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const memoisedCallback = useCallback(() => {
    console.log();
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{count}</div>
      <Calc increment={memoisedCallback} />
      <Calc increment={() => setCount(count + 1)} />
    </div>
  );
}
