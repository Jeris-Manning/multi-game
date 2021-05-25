import React from "react";
import styled from "styled-components";
import pond from "../../Assets/miscImages/pond.png";
import signFrog from "../../Assets/miscImages/signFrogLegless.png";
import PayTable from "../PayTable/PayTable";
import CreditResult from "../CreditControls/CreditResult";

const GameHeader = () => {
  return (
    <StyledHeader>
      {/* <div className="jack">
        <img src={jackFrog} alt="" />
      </div> */}
      <div className="picketDiv">
        <div className="signSurface">
          <CreditResult />
        </div>
        <img className="picket" src={signFrog} alt="" />
      </div>
      <PayTable className="tabler" />
    </StyledHeader>
  );
};

export default GameHeader;

const StyledHeader = styled.div`
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

  @media (max-width: 1000px) {
    width: 98%;
  }

  .picketDiv {
    position: relative;
    align-self: flex-end;
    // @media (max-width: 1200px) {
    //   margin: 0;
    // }
  }

  .picket {
    width: 300px;
    // height: 250px;
    @media (max-width: 620px) {
      width: 225px;
    }
  }

  .signSurface {
    height: 100px;
    width: 245px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 13px;
    left: 55px;

    h1 {
      font-size: 5rem;
      font-weight: 400;
    }

    h2 {
      font-size: 4.2rem;
      font-weight: 400;
    }
  }
  .tabler {
    min-width: 250px;
    border: solid yellow 5px;
  }
`;
