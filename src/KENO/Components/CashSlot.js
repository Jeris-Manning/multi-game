import React, {useContext} from "react";
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
      <h2>Insert</h2>
      <Bills>
        {denoms.map((bill) => (
          <BillBtn key={bill} onClick={() => addCredit(bill * 100)}>
            {"$" + bill}
          </BillBtn>
        ))}
      </Bills>
    </div>
  );
};

export default CashSlot;

const Bills = styled.div``;

const BillBtn = styled.button``;
