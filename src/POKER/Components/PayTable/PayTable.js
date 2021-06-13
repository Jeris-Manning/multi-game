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
      c < 5
        ? coinVals.push(
            <h3 className={coinCount === c ? "highlight" : "notBet"}>
              {state.showCash
                ? c === 1
                  ? "$" +
                    noPennies(
                      (handValue * creditState.denom.multiplier * c) / 100
                    )
                  : toCash((handValue * creditState.denom.multiplier * c) / 100)
                : handValue * c}
            </h3>
          )
        : coinVals.push(
            <h3
              className={
                coinCount === c ? "highlight lastCol" : "notBet lastCol"
              }>
              {state.showCash
                ? c === 1
                  ? "$" +
                    noPennies(
                      (handValue * creditState.denom.multiplier * c) / 100
                    )
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
  console.log(handTypes[2], "HAND TYPES");
  return (
    <PayChart cashVal={state.showCash ? true : false}>
      {handTypes.map((hand, idx) => (
        <PayRow striped={idx % 2 === 0 ? false : true}>{hand}</PayRow>
      ))}
    </PayChart>
  );
};

export default PayTable;

const PayRow = styled.div`
  display: contents;

  h3 {
    margin-left: -5px;
    background: ${(props) => (props.striped ? "#ffe4b9" : "none")};
  }
`;

const PayChart = styled.div`
  background-color: #ffc669;
  display: grid;
  grid-template-columns: ${(props) =>
    props.cashVal ? "14fr 6fr 6fr 6fr 6fr 6fr" : "15fr 7fr 7fr 7fr 7fr 7fr"};
  max-width: 600px;

  grid-template-rows: repeat(9, 20px);
  grid-auto-flow: row;
  gap: 4px 5px;
  padding: 5px 2px 7px 5px;
  border: solid 2px #423829;
  border-radius: 8px;
  color: #423829;
  .highlight {
    color: rgba(25, 66, 211, 0.9);
    text-shadow: 1px 1px #888;
    font-weight: 700;
  }

  h3 {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    padding: 2px 0 2px 5px;
    font-weight: 700;
  }

  .handName {
    justify-self: flex-start;
    margin-right: 5px;
    padding-left: 10px;
    width: 100%;
  }

  .lastCol {
    padding-right: 10px;
    margin-right: -2px;
  }
  @media (max-width: 1000px) {

    h3 {
     font-size: 1.6rem;
    }

  }
  @media (max-width: 850px) {
    grid-template-columns: ${(props) =>
      props.cashVal ? "12fr 7fr" : "10fr 3fr"};
    gap: 1px 1px;
    .highlight{
      padding: 0 10px 0 10px ;
    }
    .notBet {
      display: none;
    }
  }
`;
