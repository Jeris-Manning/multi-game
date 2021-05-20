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
  .jack {
    margin-left: 20px;
    height: 325px;
  }
  .picket {
    margin-right: 20px;
    height: 325px;
  }
  .picketDiv {
    position: relative;
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
    h1 {
      font-family: bree, sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 2.5rem;
    }
    h2 {
      font-family: bree, sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 1.9rem;
    }
  }
`;
