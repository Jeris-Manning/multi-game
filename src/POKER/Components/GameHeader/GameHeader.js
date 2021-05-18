import React from "react";
import styled from "styled-components";
import jackFrog from "../../Assets/miscImages/jackFrog.png";
import PayTable from "../PayTable/PayTable";

const GameHeader = () => {
  return (
    <StyledHeader>
      <img src={jackFrog} alt="" />
      <PayTable className="tabler" />
    </StyledHeader>
  );
};

export default GameHeader;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 20px 0 0 0;
  width: 100%;
  div {
    align-self: flex-end;
    // border: red solid 2px;
  }

`;
