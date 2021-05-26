import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import BetSize from "./BetSize";
import DealButton from "./DealButton";
import CoinSlot from "./CoinSlot";
import Lock from "./Lock";
import plasticTile from "../../Assets/miscImages/orangePlastic.png";

const CreditControls = () => {
  return (
    <CreditControlDiv>
      <CreditDisplay />
      <DealButton />
      <CreditDeal>
        <BetSize />
        <CoinSlot />
        <Lock />
      </CreditDeal>
    </CreditControlDiv>
  );
};

export default CreditControls;

const CreditControlDiv = styled.div`
  background-image: url(${plasticTile});
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  border-top: black 3px solid;
  @media (max-width: 800px) {
    width: 98%;
  }
`;

const CreditDeal = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  width: 35%;
  justify-content: space-between;
`;
