import React, { useCallback, useRef, useState } from "react";
import useCountRenders from "./useCountRenders";

const Calc = React.memo(({ increment }) => {
  const render = useCountRenders(0);

  return (
    <div>
      <div>Renders : {render}</div>
      <button onClick={increment}>Invcrement</button>
    </div>
  );
});

export default Calc;
