import React, { useContext } from "react";
import { toCash } from "../Utilities/KenoConstants";
import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";

const Wager = () => {
  const { state, dispatch } = useContext(KenoContext);
  const { creditState } = useContext(CreditContext);
  return (
    <>
      <h1>{"Bet: " + toCash((state.wager * creditState.denom.multiplier) / 100)}</h1>
      <button onClick={() => dispatch({ type: "BET_UP"})}>
        Bet Up
      </button>
      <button onClick={() => dispatch({ type: "BET_DOWN" })}>Bet Down</button>
    </>
  );
};

export default Wager;
