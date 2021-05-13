import React from "react";
import styled from "styled-components";

const DealButton = ({ state, dispatch }) => {
  const handleDealButtonClick = () => {
    dispatch({ type: "SUB_CREDIT" });
    dispatch({ type: "PHASE_CHANGE", payload: "afterDeal" });
  };
  const handleDrawButtonClick = () => {
    dispatch({ type: "PHASE_CHANGE", payload: "afterDraw" });
  };

  const handleFirstClick = () => {
    dispatch({ type: "SUB_CREDIT" });
    dispatch({ type: "PHASE_CHANGE", payload: "firstDeal" });
  };

  if (
    state.denom.multiplier * state.wager > state.credit &&
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
