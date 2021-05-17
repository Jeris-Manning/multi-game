import React from "react";
import styled from "styled-components";
import titleFrog from "../../Assets/miscImages/titleFrog.png";
import PayTable from "../PayTable/PayTable";

const GameHeader = () => {
  return (
    <StyledHeader>
      <img src={titleFrog} alt="" />
      <PayTable className="tabler" />
    </StyledHeader>
  );
};

export default GameHeader;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0 0 0;
  div {
    align-self: flex-end;
    // border: red solid 2px;
  }
  img {
    width: 30%;
    height: auto;
  }
`;
