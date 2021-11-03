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
      <h2>Coin Select:</h2>
      <Coin
        onClick={() =>
          creditDispatch({ type: "CHOOSE_DENOM", payload: "dime" })
        }>
        <img
          src={Dime}
          alt=""
          className={creditState.denom.name === "dime" ? "blueGlow" : ""}
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
          className={creditState.denom.name === "quarter" ? "blueGlow" : ""}
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
          className={creditState.denom.name === "dollar" ? "blueGlow" : ""}
        />
        <span>$1</span>
      </Coin>
    </ChooseCoinDiv>
  );
};

export default CoinSelect;

const ChooseCoinDiv = styled.div`
font-family: "Boogaloo", cursive;
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
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  img {
    height: 120px;
    width: 120px;
  }
  .blueGlow {
    filter: drop-shadow(5px 5px 5px #33f) drop-shadow(-5px -5px 5px #33f);
  }
`;
