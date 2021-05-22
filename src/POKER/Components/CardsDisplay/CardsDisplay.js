import React, { useContext } from "react";
import styled from "styled-components";
import AfterDeal from "./AfterDeal";
import AfterDraw from "./AfterDraw";
import { PokerContext } from "../../Poker";

const CardsDisplay = () => {
  const { state } = useContext(PokerContext);

  return (
    <CardsDisplayDiv>
      {state.phase !== "afterDraw" ? <AfterDeal /> : <AfterDraw />}
    </CardsDisplayDiv>
  );
};

export default CardsDisplay;

const CardsDisplayDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 100px;
  // border: yellow solid 2px;
`;
