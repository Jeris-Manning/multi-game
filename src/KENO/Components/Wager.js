import React, { useContext } from "react";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const Wager = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <>
      <h1>
        {"Bet: " +
          toCashString(creditState.wager * creditState.denom.multiplier)}
      </h1>
      <button onClick={() => creditDispatch({ type: "WAGER_UP" })}>
        Bet Up
      </button>
      <button onClick={() => creditDispatch({ type: "WAGER_DOWN" })}>
        Bet Down
      </button>
    </>
  );
};

export default Wager;
