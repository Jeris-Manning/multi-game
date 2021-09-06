import React, { useContext } from "react";
import { toCash } from "../../globalUtilities/helperFunctions";
import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";

const Wager = () => {
  const { state, dispatch } = useContext(KenoContext);
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <>
      <h1>
        {"Bet: " + toCash((creditState.wager * creditState.denom.multiplier) / 100)}
      </h1>
      <button onClick={() => creditDispatch({ type: "BET_UP" })}>Bet Up</button>
      <button onClick={() => creditDispatch({ type: "BET_DOWN" })}>Bet Down</button>
    </>
  );
};

export default Wager;
