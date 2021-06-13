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
      {/* <Lock /> */}
      <CoinSlot />
      <BetSize />
      <DealButton />
      <CreditDisplay />
    </CreditControlDiv>
  );
};

export default CreditControls;

const CreditControlDiv = styled.div`
  background-image: url(${plasticTile});
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 0px;
  height: 15%;
  /* max-height: 108px; */
  width: 100%;
  padding: 10px 0px;
  border-top: black 3px solid;
  @media (max-width: 800px) {
    padding: 10px 5px;
  }
`;
