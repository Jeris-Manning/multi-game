import React from "react";
import styled from "styled-components";
import coinSlot from "../../Assets/miscImages/coinSlot.png";

const CoinSlot = () => {
  return <InsertCoin src={coinSlot} alt="" />;
};

export default CoinSlot;

const InsertCoin = styled.img`
  height: 90px;
  width: auto;
  box-shadow: 3px 3px 2px black;
`;
