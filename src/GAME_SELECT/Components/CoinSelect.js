import React, { useContext } from "react";
import styled from "styled-components";
import { CreditContext } from "../../App";
import Dime from "../assets/dime.png";
import Quarter from "../assets/quarter.png";
import Dollar from "../assets/dollar.png";

const CoinSelect = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <ChooseCoinDiv>
      <h2>Denomination:</h2>
      <Coin
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "dime" })
        }>
        <img
          src={Dime}
          alt=""
          className={creditState.denom.name === "dime" ? "greenGlow" : ""}
        />
        <span>10¢</span>
      </Coin>
      <Coin
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "quarter" })
        }>
        <img
          src={Quarter}
          alt=""
          className={creditState.denom.name === "quarter" ? "greenGlow" : ""}
        />
        <span>25¢</span>
      </Coin>
      <Coin
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "dollar" })
        }>
        <img
          src={Dollar}
          alt=""
          className={creditState.denom.name === "dollar" ? "greenGlow" : ""}
        />
        <span>$1</span>
      </Coin>
    </ChooseCoinDiv>
  );
};

export default CoinSelect;

const ChooseCoinDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  width: 700px;
  h2 {
    font-size: 2.8rem;
  }
`;

const Coin = styled.div`
  height: 160px;
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  img {
    height: 120px;
    width: 120px;
  }
  .greenGlow {
    filter: drop-shadow(5px 5px 5px #33f) drop-shadow(-5px -5px 5px #33f);
  }
`;
