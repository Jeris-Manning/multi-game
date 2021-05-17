import React, { useContext } from "react";
import styled from "styled-components";
import arrowUp from "../../Assets/miscImages/arrowUp.png";
import arrowDown from "../../Assets/miscImages/arrowDown.png";
import { toCash } from "../../Utility/PokerConstants";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";

const BetSize = () => {
  const { state, dispatch } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);
  const cashWager = toCash((state.wager * creditState.denom.multiplier) / 100);

  return (
    <CoinCountDiv>
      <h1
        className="betLabel"
        onClick={() => {
          dispatch({ type: "SHOW_CASH" });
        }}>
        Bet:
      </h1>

      <div className="arrowColumn">
        <img
          src={arrowUp}
          alt="Arrow pointing up"
          onClick={() => dispatch({ type: "BET_UP" })}
        />
        {state.showCash ? (
          <h1
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {cashWager}
          </h1>
        ) : (
          <h1
            onClick={() => {
              dispatch({ type: "SHOW_CASH" });
            }}>
            {state.wager}
          </h1>
        )}
        <img
          src={arrowDown}
          alt="Arrow pointing down"
          onClick={() => dispatch({ type: "BET_DOWN" })}
        />
      </div>
    </CoinCountDiv>
  );
};

export default BetSize;

const CoinCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .betLabel {
    margin-right: 20px;
  }

  img {
    width: 50px;
    cursor: pointer;
  }

  .arrowColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 85px;
      text-align: center;
    }
  }
`;
