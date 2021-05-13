import React, { useEffect, useState } from "react";
import { toCash } from "../../Utility/constants";

const CreditDisplay = ({ state, dispatch }) => {
  const [credNum, setCredNum] = useState(0);

  useEffect(() => {
    setCredNum(state.credit);
  }, [state.credit]);

  let cash = `Credit: ${toCash(credNum / 100)}`;
  let credits = `Credits: ${credNum / state.denom.multiplier}`;

  return (
    <h1
      onClick={() => {
        dispatch({ type: "SHOW_CASH" });
      }}>
      {state.showCash ? cash : credits}
    </h1>
  );
};

export default CreditDisplay;
