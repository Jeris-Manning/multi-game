import React from "react";
import styled from "styled-components";
import coinSlot from "../../Assets/miscImages/coinSlot.png";
import lock from "../../Assets/miscImages/cabLock.png";

const CoinSlot = () => {
  return (
    <StyledCoinDiv>
      <img className='slot' src={coinSlot} alt="" />
      <img className = 'lock' src={lock} alt="" />
    </StyledCoinDiv>
  );
};

export default CoinSlot;

const StyledCoinDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .slot {
    height: 120px;
    width: auto;
    margin-right: 25px;
  }
  .lock {
    height: 100px;
    width: auto;
  }
`;
