import React, { useContext } from "react";
import styled from "styled-components";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const Wager = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <WagerBox>
      <h1>
        {"Bet: " +
          toCashString(creditState.wager * creditState.denom.multiplier)}
      </h1>
      <div className="wagerButtons">
        <button onClick={() => creditDispatch({ type: "WAGER_UP" })}>
          Bet Up
        </button>
        <button onClick={() => creditDispatch({ type: "WAGER_DOWN" })}>
          Bet Down
        </button>
      </div>
    </WagerBox>
  );
};

export default Wager;

const WagerBox = styled.div`
  display: flex;
  flex-direction: column;

  .wagerButtons {
    display: flex;
    flex-direction: row;
  }
`;
