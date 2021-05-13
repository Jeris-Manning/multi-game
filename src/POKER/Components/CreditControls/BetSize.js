import React from "react";
import styled from "styled-components";
import arrowUp from "../../Assets/miscImages/arrowUp.png";
import arrowDown from "../../Assets/miscImages/arrowDown.png";
import { toCash } from "../../../Constants";

const BetSize = ({ state, dispatch }) => {
  return (
    <CoinCountDiv>
      <img
        src={arrowUp}
        alt="Arrow pointing up"
        onClick={() => dispatch({ type: "BET_UP", payload: "poker" })}
      />
      {state.showCash ? (
        <h1
          onClick={() => {
            dispatch({ type: "SHOW_CASH" });
          }}>{`BET: ${toCash(
          (state.wager * state.denom.multiplier) / 100
        )}`}</h1>
      ) : (
        <h1
          onClick={() => {
            dispatch({ type: "SHOW_CASH" });
          }}>{`BET: ${state.wager} Credits`}</h1>
      )}
      <img
        src={arrowDown}
        alt="Arrow pointing down"
        onClick={() => dispatch({ type: "BET_DOWN" })}
      />
    </CoinCountDiv>
  );
};

export default BetSize;

const CoinCountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 50px;
    cursor: pointer;
  }
`;
