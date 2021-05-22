import React, { useContext } from "react";
import styled from "styled-components";
import { toCash } from "../../Utility/PokerConstants";
import { CreditContext } from "../../../App";
import { PokerContext } from "../../Poker";

const CreditDisplay = () => {
  const { creditState } = useContext(CreditContext);
  const { state, dispatch } = useContext(PokerContext);

  let cash = `Credit: ${toCash(creditState.credit / 100)}`;
  let credits = `Credits: ${creditState.credit / creditState.denom.multiplier}`;

  return (
    <CreditDisplayHeader
      onClick={() => {
        dispatch({ type: "SHOW_CASH" });
      }}>
      {state.showCash ? cash : credits}
    </CreditDisplayHeader>
  );
};

export default CreditDisplay;

const CreditDisplayHeader = styled.h2`
user-select: none;
cursor: pointer;
width: 30%;

`