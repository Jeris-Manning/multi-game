import React, { useContext } from "react";
import styled from "styled-components";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";
import { toCash } from "../../Utility/PokerConstants";

const CreditResult = () => {
  const { state } = useContext(PokerContext);
  const { creditState } = useContext(CreditContext);

  return (
    <CreditResultDisplay>
      <AnnounceHandHeader className={state.finalHand[1] === 0 ? "scram" : ""}>
        WINNER!
      </AnnounceHandHeader>
      {state.showCash ? (
        <AnnounceHandHeader
          className={state.finalHand[1] === 0 ? "scram" : ""}>{`
          ${state.finalHand[0]} Pays ${toCash(
          state.finalHand[1] * state.wager * creditState.denom.value
        )}`}</AnnounceHandHeader>
      ) : (
        <AnnounceHandHeader className={state.finalHand[1] === 0 ? "scram" : ""}>
          {`
            ${state.finalHand[0]} Pays ${state.finalHand[1] * state.wager} ${
            state.finalHand[1] === 1 && state.wager === 1
              ? " Credit"
              : " Credits"
          }
            `}
        </AnnounceHandHeader>
      )}
    </CreditResultDisplay>
  );
};

export default CreditResult;

const CreditResultDisplay = styled.div`
  .scram {
    display: none;
  }
`;

const AnnounceHandHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;
