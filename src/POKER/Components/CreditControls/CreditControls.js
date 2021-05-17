import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import CashSlot from "./CashSlot";
import BetSize from "./BetSize";
import CreditResult from "./CreditResult";

const CreditControls = () => {
  return (
    <CreditControlDiv>
      <BetSize />
      <CreditResult />
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
