import React from "react";
import { toCash } from "../../Constants";

const Wager = ({ state, dispatch }) => {
  return (
    <>
      <h1>{"Bet: " + toCash((state.wager * state.denom.multiplier) / 100)}</h1>
      <button onClick={() => dispatch({ type: "BET_UP", payload: "keno" })}>
        Bet Up
      </button>
      <button onClick={() => dispatch({ type: "BET_DOWN" })}>Bet Down</button>
    </>
  );
};

export default Wager;
