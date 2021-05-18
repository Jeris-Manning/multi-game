import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../Poker";
import { CreditContext } from "../../App";
import ButtonFrog from "../Assets/miscImages/buttonPushFrog.png";

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
        <DealDrawButton>
          <button disabled={true}>
            {state.phase === "afterDeal" ? "Draw" : "Deal"}
          </button>
        </DealDrawButton>
        <h3>Not enough credit for selected wager</h3>
      </>
    );
  } else if (state.phase === "begin") {
    return (
      <DealDrawButton>
        <button onClick={() => handleFirstClick()}>Deal</button>
      </DealDrawButton>
    );
  } else {
    return (
      <DealDrawButton>
        <button
          onClick={
            state.phase === "afterDeal"
              ? () => handleDrawButtonClick()
              : () => handleDealButtonClick()
          }>
          {state.phase === "afterDeal" ? "Draw" : "Deal"}
        </button>
      </DealDrawButton>
    );
  }
};

export default DealButton;

const DealDrawButton = styled.div`
  button {
    // border: yellow solid 3px;
    margin-top: 50px;
    width: 150px;
  }
`;
