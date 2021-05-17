import React from "react";
import styled from "styled-components";

const GameHeader = ({ game }) => {
  return <GameHeaderDiv>{game}</GameHeaderDiv>;
};

export default GameHeader;

const GameHeaderDiv = styled.h1`
  margin-bottom: 10px;
`;
