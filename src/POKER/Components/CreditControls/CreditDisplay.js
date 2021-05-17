import React, { useContext } from "react";
import { toCash } from "../../Utility/PokerConstants";
import { CreditContext } from "../../../App";
import { PokerContext } from "../../Poker";

const CreditDisplay = () => {
  const { creditState } = useContext(CreditContext);
  const { state, dispatch } = useContext(PokerContext);

  let cash = `Credit: ${toCash(creditState.credit / 100)}`;
  let credits = `Credits: ${creditState.credit / creditState.denom.multiplier}`;

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
