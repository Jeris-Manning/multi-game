import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import BetSize from "./BetSize";
import DealButton from "./DealButton";


const CreditControls = () => {
  return (
    <CreditControlDiv>
      <BetSize />
      <DealButton />
      <CreditDisplay />
    </CreditControlDiv>
  );
};

export default CreditControls;

const CreditControlDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 900px;
  @media (max-width: 800px) {
    width: 98%;
  }
`;
