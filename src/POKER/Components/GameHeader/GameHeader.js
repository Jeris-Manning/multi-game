import React from "react";
import styled from "styled-components";
import pond from "../../Assets/miscImages/pond.png";
import signFrog from "../../Assets/miscImages/rainBo.png";
import PayTable from "../PayTable/PayTable";
import CreditResult from "../CreditControls/CreditResult";

const GameHeader = () => {
  return (
    <StyledHeader>
      <div className="picketDiv">
        <div className="signSurface">
          <CreditResult />
        </div>
        <img className="picket" src={signFrog} alt="" />
      </div>
      <PayTable />
    </StyledHeader>
  );
};

export default GameHeader;

const StyledHeader = styled.div`
  /* overflow-x: hidden; */
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  width: 90%;
  border-radius: 10px;
  border: solid 2px #423829;
  padding: 5px 5px 0 5px;
  background: url(${pond});
  background-size: cover;
  background-position: bottom;

  .picketDiv {
    position: relative;
    align-self: flex-end;
  }

  .picket {
    width: 300px;
  }

  .signSurface {
    height: 125px;
    width: 253px;
    background-color: rgba(255, 255, 255, 0.3);
    border: solid 2px #423829;
    border-radius: 8px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 3px;
    left: 45px;

    h1 {
      font-size: 6rem;
      font-weight: 400;
      color: rgba(10, 20, 10, 0.8);
    }

    h2 {
      font-size: 4.2rem;
      font-weight: 400;
      color: #151;
    }
  }

  @media (max-width: 1000px) {
    width: 98%;
  }
  @media (max-width: 620px) {
    justify-content: space-between;
    .picket {
      width: 225px;
    }
    .signSurface {
      width: 192px;
      height: 95px;
      left: 33px;
      top: 2px;
      h1 {
        font-size: 4.5rem;
      }
      h2 {
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 440px) {
    .picketDiv {
      margin-left: -50px;
      overflow-x: hidden;
    }
  }
`;
