import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import { toCash, jbPays, noPennies } from "../../Utility/PokerConstants";

const PayTable = () => {
  const { state } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);
  let payArray = [];
  let handTypes = [];
  let pay = { ...jbPays };
  let replacer = /_/g;
  for (let [rawHand, value] of Object.entries(pay)) {
    let replacedHand = rawHand.replace(replacer, " ");
    payArray.push([replacedHand, value]);
  }
  let coinCount = state.wager;

  const divMaker = (handValue) => {
    let coinVals = [];
    for (let c = 1; c < 6; c++) {
      coinVals.push(
        <h3 className={coinCount === c ? "highlight" : "notBet"}>
          {state.showCash
            ? c === 1
              ? "$" +
                noPennies((handValue * creditState.denom.multiplier * c) / 100)
              : toCash((handValue * creditState.denom.multiplier * c) / 100)
            : handValue * c}
        </h3>
      );
    }
    return coinVals;
  };

  for (let i = 0; i < payArray.length; i++) {
    handTypes.push(
      <>
        <h3 className="handName">{payArray[i][0]}</h3>
        {divMaker(payArray[i][1])}
      </>
    );
  }

  return (
    <PayChart>
      {handTypes.map((hand, idx) => (
        <>{hand}</>
      ))}
    </PayChart>
  );
};

export default PayTable;

const PayChart = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 18fr 7fr 7fr 7fr 7fr 7fr;
  grid-template-rows: repeat(9, 20px);
  grid-auto-flow: row;
  gap: 4px 5px;
  padding: 10px 15px;
  border-radius: 8px;
  // font-family: newbery-sans-pro, sans-serif;

  .highlight {
    background-color: rgba(0, 200, 0, 0.3);
  }

  .handName {
    justify-self: flex-start;
    margin-right: 5px;
  }

  h3:nth-child(2) {
    background: yellow;
  }

  h3 {
    font-size: 1.8rem;
    // font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 3px;
    font-weight: 700;
    @media (max-width: 800px) {
      padding: 0;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 18fr 7fr;
    gap: 1px 1px;
    .notBet {
      display: none;
    }
  }
`;
