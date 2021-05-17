import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import { toCash, jbPays } from "../../Utility/PokerConstants";

const PayTable = () => {
  const { state } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);
  let payArray = [];
  let pay = { ...jbPays };
  let replacer = /_/g;
  for (let [rawHand, value] of Object.entries(pay)) {
    let replacedHand = rawHand.replace(replacer, " ");
    payArray.push([replacedHand, value]);
  }
  let coinCount = state.wager;
  return (
    <PayChart>
      {payArray.map((hand, idx) => (
        <>
          <h3 className="handName">{hand[0]}</h3>
          <h3 className={coinCount === 1 ? "highlight" : ""}>
            {state.showCash
              ? toCash((hand[1] * creditState.denom.multiplier) / 100)
              : hand[1]}
          </h3>
          <h3 className={coinCount === 2 ? "highlight" : ""}>
            {state.showCash
              ? toCash((hand[1] * creditState.denom.multiplier * 2) / 100)
              : hand[1] * 2}
          </h3>
          <h3 className={coinCount === 3 ? "highlight" : ""}>
            {state.showCash
              ? toCash((hand[1] * creditState.denom.multiplier * 3) / 100)
              : hand[1] * 3}
          </h3>
          <h3 className={coinCount === 4 ? "highlight" : ""}>
            {state.showCash
              ? toCash((hand[1] * creditState.denom.multiplier * 4) / 100)
              : hand[1] * 4}
          </h3>
          <h3 className={coinCount === 5 ? "highlight" : ""}>
            {state.showCash
              ? toCash((hand[1] * creditState.denom.multiplier * 5) / 100)
              : hand[1] * 5}
          </h3>
        </>
      ))}
    </PayChart>
  );
};

export default PayTable;

const PayChart = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(9, 24px);
  grid-auto-flow: row;
  gap: 0 20px;
  margin-bottom: 15px;

  .highlight {
    background-color: yellow;
  }

  .handName {
    justify-self: start;
  }

  h3 {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3px;
  }
`;
