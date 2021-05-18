import React, { useContext } from "react";
import styled from "styled-components";
import { toCash } from "../../Utility/PokerConstants";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";

const BetSize = () => {
  const { state, dispatch } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);
  const cashWager = toCash((state.wager * creditState.denom.multiplier) / 100);

  return (
    <CoinCountDiv>
      <h2
        className="betLabel"
        onClick={() => {
          dispatch({ type: "SHOW_CASH" });
        }}>
        Bet:
      </h2>

      <div className="arrowColumn">
        <UpArrow
          disabled={state.phase === "afterDeal" ? true : false}
          onClick={() => {
            dispatch({ type: "BET_UP" });
            dispatch({ type: "SET_FINAL_HAND_RANK", payload: ["", 0] });
          }}>
          <span />
        </UpArrow>
        {state.showCash ? (
          <h2
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {cashWager}
          </h2>
        ) : (
          <h2
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {state.wager}
          </h2>
        )}
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
  justify-content: space-around;
  align-items: center;

  h2 {
    width: 85px;
    text-align: center;
        color: #272b23;
  }

  .betLabel {
    width: 60px;
  }

  .arrowColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 10px 0;
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
  border-width: 0 22.5px 35px 22.5px;
  border-color: transparent transparent #bd1515 transparent;
`;

const DownArrow = styled.button`
  border-width: 35px 22.5px 0 22.5px;
  border-color: #bd1515 transparent transparent transparent;
`;

// 197 x 159
