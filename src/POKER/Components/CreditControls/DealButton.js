import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import FrogButton from "./FrogButton";

const DealButton = () => {
  const { state, dispatch } = useContext(PokerContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  const handleDealButtonClick = () => {
    creditDispatch({ type: "SUB_CREDIT", payload: creditState.wager });
    dispatch({ type: "PHASE_CHANGE", payload: "afterDeal" });
  };
  const handleDrawButtonClick = () => {
    dispatch({ type: "PHASE_CHANGE", payload: "afterDraw" });
  };

  const handleFirstClick = () => {
    creditDispatch({ type: "SUB_CREDIT", payload: creditState.wager });
    dispatch({ type: "PHASE_CHANGE", payload: "afterDeal" });
  };
  let oC = "";
  let btnTxt = "";
  let warn = "";

  if (
    creditState.denom.multiplier * creditState.wager > creditState.credit &&
    state.phase !== "afterDeal"
  ) {
    oC = "";
    btnTxt = state.phase === "afterDeal" ? "DRAW" : "DEAL";
    warn = "Not enough credit for selected wager";
  } else if (state.phase === "begin") {
    oC = handleFirstClick;
    btnTxt = "DEAL";
    warn = "";
  } else if (state.phase === "afterDeal") {
    oC = handleDrawButtonClick;
    btnTxt = "DRAW";
    warn = "";
  } else {
    oC = handleDealButtonClick;
    btnTxt = "DEAL";
    warn = "";
  }
  return (
    <FrogButtonWrap>
      <FrogButton onClick={oC} frozen={warn !== "" ? true : false}>
        <h1>{btnTxt}</h1>
      </FrogButton>
      <h3>{warn}</h3>
    </FrogButtonWrap>
  );
};

export default DealButton;

const FrogButtonWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
    position: absolute;
    top: 90px;
  }
`;
