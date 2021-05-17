import React, { useContext } from "react";
import styled from "styled-components";
import { CreditContext } from "../App";

const CoinSelect = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <ChooseCoinDiv>
      <h1>Coin:</h1>
      <CoinCircle
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "dime" })
        }
        fill={creditState.denom.name === "dime" ? true : false}>
        10¢
      </CoinCircle>
      <CoinCircle
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "quarter" })
        }
        fill={creditState.denom.name === "quarter" ? true : false}>
        25¢
      </CoinCircle>
      <CoinCircle
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "dollar" })
        }
        fill={creditState.denom.name === "dollar" ? true : false}>
        $1
      </CoinCircle>
    </ChooseCoinDiv>
  );
};

export default CoinSelect;

const ChooseCoinDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 300px;
`;

const CoinCircle = styled.div`
  height: 60px;
  width: 60px;
  border: solid black 3px;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  background-color: ${(props) => (props.fill ? "palegreen" : "red")};
  cursor: pointer;
`;
