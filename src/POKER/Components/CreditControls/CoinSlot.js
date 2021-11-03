import React, { useContext } from "react";
import styled from "styled-components";
import coinSlot from "../../Assets/miscImages/coinSlot.png";
import { CreditContext } from "../../../App";

const CoinSlot = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  let credits = creditState.denom.multiplier;
  return (
    <InsertCoin
      src={coinSlot}
      alt=""
      onClick={() => creditDispatch({ type: "ADD_CREDIT", credits })}
    />
  );
};

export default CoinSlot;

const InsertCoin = styled.img`
  height: 75px;
  width: auto;
  box-shadow: 3px 3px 2px black;
  cursor: pointer;
  @media (max-width: 600px) {
    height: 60px;
  }
`;
