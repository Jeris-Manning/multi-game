import React, { useContext } from "react";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import { toCash } from "../../Utility/PokerConstants";

const CreditResult = () => {
  const { state } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);

  return state.finalHand[1] !== 0 ? (
    <>
      <h2>{state.finalHand[0]}</h2>
      <h2>
        {state.showCash
          ? toCash(
              state.finalHand[1] * creditState.wager * creditState.denom.value
            )
          : `${state.finalHand[1] * creditState.wager} ${
              state.finalHand[1] === 1 && creditState.wager === 1
                ? " Credit"
                : " Credits"
            }
 `}
      </h2>
    </>
  ) : (
    <h1>Good Luck!</h1>
  );
};
export default CreditResult;
