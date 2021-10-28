import React, { useContext } from "react";
import styled from "styled-components";
import BugUp from "../assets/upskeeter.png";
import BugDown from "../assets/downskeeter.png";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const Wager = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <WagerBox>
      <div className="wagerButtons">
        <img
          className="down"
          src={BugDown}
          alt="mosquito pointing down"
          onClick={() => creditDispatch({ type: "WAGER_DOWN" })}
        />
        <BetLabel>CHANGE BET</BetLabel>
        <img
          className="up"
          src={BugUp}
          alt="mosquito pointing up"
          onClick={() => creditDispatch({ type: "WAGER_UP" })}
        />
      </div>
      <div className="wagerDisplay">
        {toCashString(creditState.wager * creditState.denom.multiplier)}
      </div>
    </WagerBox>
  );
};

export default Wager;

const WagerBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  width: 350px;

  .wagerButtons {
    background: rgba(51, 51, 51, 0.9);
    border: solid orange 4px;
    outline: solid #333 3px;
    height: 70px;
    border-radius: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .up {
      right: 0;
    }
    .down {
      left: 0;
    }
    img {
      position: absolute;
      width: 62px;
      height: 107px;
      cursor: pointer;
    }
  }
  .wagerDisplay {
    display: flex;
    justify-content: center;
    background: orange;
    width: 130px;
    align-self: center;
    height: 40px;
    border: solid #333 3px;
    outline: solid orange 4px;
    border-radius: 0 0 20px 20px;
    font-weight: 700;
    font-size: 2.2rem;
    color: #222;
  }
`;

const BetLabel = styled.h2`
  color: orange;
  text-shadow: 1px 1px 0 rgba(140, 90, 0, 0.8);
  font-weight: 700;
  font-size: 2.2rem;
`;
