import React, { useContext } from "react";
import styled from "styled-components";
// import { toCash } from "../../Utility/PokerConstants";
import { PokerContext } from "../../Poker";
// import { CreditContext } from "../../../App";
import plasticTile from "../../Assets/miscImages/plasticTile.png";

const BetSize = () => {
  const { state, dispatch } = useContext(PokerContext);
  // const { creditState } = useContext(CreditContext);
  // const cashWager = toCash((state.wager * creditState.denom.multiplier) / 100);

  return (
    <CoinCountDiv>
      <div className="arrowColumn">
        <UpArrow
          disabled={state.phase === "afterDeal" ? true : false}
          onClick={() => {
            dispatch({ type: "BET_UP" });
            dispatch({ type: "SET_FINAL_HAND_RANK", payload: ["", 0] });
          }}>
          <span />
        </UpArrow>
        <h2
          className="betLabel"
          onClick={() => {
            dispatch({ type: "SHOW_CASH" });
          }}>
          WAGER
        </h2>
        {/* {state.showCash ? (
          <h2
            className="wagerCount"
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {cashWager}
          </h2>
        ) : (
          <h2
            className="wagerCount"
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {state.wager}
          </h2>
        )} */}
        <DownArrow
          disabled={state.phase === "afterDeal" ? true : false}
          onClick={() => {
            dispatch({ type: "BET_DOWN" });
            dispatch({ type: "SET_FINAL_HAND_RANK", payload: ["", 0] });
          }}
        />
      </div>
    </CoinCountDiv>
  );
};

export default BetSize;

const CoinCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  background-image: url(${plasticTile});
  padding: 8px;
  border-radius: 5px;
  border: solid 3px black;

  .betLabel {
    font-size: 2.5rem;
    cursor: pointer;
    color: #ffe4b9;
    text-shadow: 3px 3px 2px #111;
    margin: 0 10px;
    @media (max-width: 1000px) {
      font-size: 1.875rem;
    }
    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }

  .arrowColumn {
    display: flex;
    justify-content: center;
    align-items: center;
    .wagerCount {
      cursor: pointer;
      color: #ffe4b9;
      text-shadow: 3px 3px 2px #111;
      font-size: 2.875rem;
      @media (max-width: 1000px) {
        font-size: 1.875rem;
      }
      @media (max-width: 600px) {
        font-size: 1.25rem;
      }
    }
    button {
      display: flex;
      width: 0;
      height: 0;
      border-style: solid;
      padding: 0;
      margin: 0;
      filter: drop-shadow(0px 2px 1px #111);
      background: transparent;
      cursor: pointer;
      :active {
        transform: translateY(2px);
        filter: none;
      }
    }
  }
`;

const UpArrow = styled.button`
  border-top-width: 0;
  border-right-width: clamp(12px, 10px + 0.9vw, 22.5px);
  border-left-width: clamp(12px, 10px + 0.9vw, 22.5px);
  border-bottom-width: clamp(19px, 17px + 1.5vw, 35px);
  border-color: transparent transparent #bd1515 transparent;
`;

const DownArrow = styled.button`
  border-bottom-width: 0;
  border-right-width: clamp(12px, 10px + 0.9vw, 22.5px);
  border-left-width: clamp(12px, 10px + 0.9vw, 22.5px);
  border-top-width: clamp(19px, 17px + 1.5vw, 35px);
  border-color: #bd1515 transparent transparent transparent;
`;
