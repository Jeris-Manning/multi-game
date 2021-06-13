import React, { useContext } from "react";
import styled from "styled-components";
import { toCash } from "../../Utility/PokerConstants";
import { CreditContext } from "../../../App";
import { PokerContext } from "../../Poker";
import "../../Poker.css";

const CreditDisplay = () => {
  const { creditState } = useContext(CreditContext);
  const { state, dispatch } = useContext(PokerContext);

  let cash = `Credit: ${toCash(creditState.credit / 100)}`;
  let credits = `Credits: ${creditState.credit / creditState.denom.multiplier}`;

  return (
    <CreditDisplayer
      onClick={() => {
        dispatch({ type: "SHOW_CASH" });
      }}>
      <div>
        <h2>{state.showCash ? cash : credits}</h2>
      </div>
    </CreditDisplayer>
  );
};

export default CreditDisplay;

const CreditDisplayer = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  border: solid #555 8px;
  background-color: black;
  padding: 3px;
  box-shadow: 2px 2px 1px black;
  div {
    width: 100%;
    background: linear-gradient(45deg, #019724, #02ff3d);
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      user-select: none;
      cursor: pointer;
      padding-top: 5px;
      font-size: 3rem;
      font-family: "LCD", sans-serif;
      font-weight: 700;
    }
  }
  @media (max-width: 1000px) {
    div {
      h2 {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 800px) {
    border-width: 3px;
    div {
      h2 {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 490px) {
    width: 60%;
  }
`;
