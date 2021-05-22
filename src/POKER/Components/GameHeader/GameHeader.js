import React from "react";
import styled from "styled-components";
import jackFrog from "../../Assets/miscImages/jackFrog.png";
import signFrog from "../../Assets/miscImages/signFrog.png";
import PayTable from "../PayTable/PayTable";
import CreditResult from "../CreditControls/CreditResult";

const GameHeader = () => {
  return (
    <StyledHeader>
      <img className="jack" src={jackFrog} alt="" />
      <PayTable className="tabler" />
      <div className="picketDiv">
        <div className="signSurface">
          <CreditResult />
        </div>
        <img className="picket" src={signFrog} alt="" />
      </div>
    </StyledHeader>
  );
};

export default GameHeader;

const StyledHeader = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  @media (max-width: 1200px) {
    justify-content: space-evenly;
  }
  @media (max-width: 760px) {
    width: auto;
  }
  .jack {
    margin-left: 20px;
    height: 325px;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .picket {
    height: 325px;
    @media (max-width: 760px) {
      display: none;
    }
  }
  .picketDiv {
    position: relative;
    margin-right: 20px;
    @media (max-width: 1200px) {
      margin: 0;
    }
  }
  .signSurface {
    height: 85px;
    width: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 13px;
    left: 55px;
    @media (max-width: 760px) {
      display: none;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.3rem;
      font-weight: 400;
    }
  }
`;
