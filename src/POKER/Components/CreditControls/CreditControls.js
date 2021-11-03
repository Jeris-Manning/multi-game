import React from "react";
import styled from "styled-components";
import CreditDisplay from "./CreditDisplay";
import BetSize from "./BetSize";
import DealButton from "./DealButton";
import CoinSlot from "./CoinSlot";
import plasticTile from "../../Assets/miscImages/orangePlastic.png";
import { Link } from "react-router-dom";

const CreditControls = () => {
  return (
    <CreditControlDiv>
      <Link className="select" to="/">
        Game Select
      </Link>
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
  max-height: 115px;
  width: 100%;
  padding: 10px 0px;
  border-top: black 3px solid;

  .select {
    text-decoration: none;
    color: #ffe4b9;
    width: 120px;
    border-radius: 5px;
    background-color: darkgreen;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    padding: 5px 10px;
    text-shadow: 2px 2px 2px #111;
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 800px) {
    padding: 10px 5px;
  }
`;
