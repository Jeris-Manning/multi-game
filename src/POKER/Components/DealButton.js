import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../Poker";
import { CreditContext } from "../../App";

const DealButton = () => {
  const { state, dispatch } = useContext(PokerContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  const handleDealButtonClick = () => {
    creditDispatch({ type: "SUB_CREDIT", payload: state.wager });
    dispatch({ type: "PHASE_CHANGE", payload: "afterDeal" });
  };
  const handleDrawButtonClick = () => {
    dispatch({ type: "PHASE_CHANGE", payload: "afterDraw" });
  };

  const handleFirstClick = () => {
    creditDispatch({ type: "SUB_CREDIT", payload: state.wager });
    dispatch({ type: "PHASE_CHANGE", payload: "firstDeal" });
  };

  if (
    creditState.denom.multiplier * state.wager > creditState.credit &&
    state.phase !== "afterDeal"
  ) {
    return (
      <>
        <DealDrawButton disabled={true}>
          {state.phase === "afterDeal" ? "Draw" : "Deal"}
        </DealDrawButton>
        <h3>Not enough credit for selected wager</h3>
      </>
    );
  } else if (state.phase === "begin") {
    return (
      <DealDrawButton onClick={() => handleFirstClick()}>Deal</DealDrawButton>
    );
  } else {
    return (
      <DealDrawButton
        onClick={
          state.phase === "afterDeal"
            ? () => handleDrawButtonClick()
            : () => handleDealButtonClick()
        }>
        {state.phase === "afterDeal" ? "Draw" : "Deal"}
      </DealDrawButton>
    );
  }
};

export default DealButton;

const DealDrawButton = styled.button`
  margin-top: 50px;
  width: 150px;
`;
