import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import { toCash, jbPays, noPennies } from "../../Utility/PokerConstants";

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
          <h4 className={coinCount === 1 ? "highlight" : ""}>
            {state.showCash
              ? idx === 0
                ? "$" +
                  noPennies((hand[1] * creditState.denom.multiplier) / 100)
                : toCash((hand[1] * creditState.denom.multiplier) / 100)
              : hand[1]}
          </h4>
          <h4 className={coinCount === 2 ? "highlight" : ""}>
            {state.showCash
              ? idx === 0
                ? "$" +
                  noPennies((hand[1] * creditState.denom.multiplier * 2) / 100)
                : toCash((hand[1] * creditState.denom.multiplier * 2) / 100)
              : hand[1] * 2}
          </h4>
          <h4 className={coinCount === 3 ? "highlight" : ""}>
            {state.showCash
              ? idx === 0
                ? "$" +
                  noPennies((hand[1] * creditState.denom.multiplier * 3) / 100)
                : toCash((hand[1] * creditState.denom.multiplier * 3) / 100)
              : hand[1] * 3}
          </h4>
          <h4 className={coinCount === 4 ? "highlight" : ""}>
            {state.showCash
              ? idx === 0
                ? "$" +
                  noPennies((hand[1] * creditState.denom.multiplier * 4) / 100)
                : toCash((hand[1] * creditState.denom.multiplier * 4) / 100)
              : hand[1] * 4}
          </h4>
          <h4 className={coinCount === 5 ? "highlight" : ""}>
            {state.showCash
              ? idx === 0
                ? "$" +
                  noPennies((hand[1] * creditState.denom.multiplier * 5) / 100)
                : toCash((hand[1] * creditState.denom.multiplier * 5) / 100)
              : hand[1] * 5}
          </h4>
        </>
      ))}
    </PayChart>
  );
};

export default PayTable;

const PayChart = styled.div`
background: rgba(255,255,255,.7);
  display: grid;
  // justify-items: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(9, 24px);
  grid-auto-flow: row;
  gap: 4px 5px;
  // margin-bottom: 5px;
  padding: 10px 0 10px 20px;
  border-radius: 8px;

  .highlight {
    background-color: rgba(0, 200, 0, 0.3);
  }

  .handName {
    justify-self: start;
  }

  h2,
  h4 {
    display: flex;
    align-items: center;
    padding: 3px;
  }
`;
