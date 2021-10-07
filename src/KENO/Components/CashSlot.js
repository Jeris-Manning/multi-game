import React, { useContext } from "react";
import styled from "styled-components";
import { CreditContext } from "../../App";

const CashSlot = () => {
  const { creditDispatch } = useContext(CreditContext);

  const addCredit = (credits) => {
    creditDispatch({ type: "ADD_CREDIT", credits });
  };

  const denoms = [5, 10, 20];

  return (
    <div>
      <AddCredit>Add Credits</AddCredit>
    </div>
  );
};

export default CashSlot;

const AddCredit = styled.div``;


