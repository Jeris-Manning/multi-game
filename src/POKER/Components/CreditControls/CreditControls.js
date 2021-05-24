import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import BetSize from "./BetSize";
import DealButton from "./DealButton";
import CoinSlot from "./CoinSlot";
import plasticTile from "../../Assets/miscImages/plastic.png";

const CreditControls = () => {
  return (
    <CreditControlDiv>
      <BetSize />
      <DealButton />
      {/* <CreditDisplay /> */}
      <CoinSlot />
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
  // width: 900px;
  width: 100%;
  padding: 20px;
  border-top: black 5px solid;
  @media (max-width: 800px) {
    width: 98%;
  }
`;
