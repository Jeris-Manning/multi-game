import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import CashSlot from "./CashSlot";
import BetSize from "./BetSize";
import CreditResult from "./CreditResult";
import DealButton from "../DealButton";
import FrogButton from "./FrogButton";

const CreditControls = () => {
  return (
    <CreditControlDiv>
      <BetSize />
      {/* <CreditResult /> */}
      {/* <DealButton /> */}
      <FrogButton />
      <CreditDisplay />
      {/* <CashSlot /> */}
    </CreditControlDiv>
  );
};

export default CreditControls;

const CreditControlDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
