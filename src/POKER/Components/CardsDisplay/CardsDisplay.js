import React from "react";
import styled from "styled-components";
import AfterDeal from "./AfterDeal";
import AfterDraw from "./AfterDraw";

const CardsDisplay = ({ state, dispatch }) => {


  return (
    <CardsDisplayDiv>
      {state.phase !== 'afterDraw' ? (
        <AfterDeal state={state} dispatch={dispatch} />
      ) : (
        <AfterDraw state={state} dispatch={dispatch} />
      )}
    </CardsDisplayDiv>
  );
};

export default CardsDisplay;

const CardsDisplayDiv = styled.div`
  display: flex;
  justify-content: center;
  // border: solid blue 3px;
  width: calc(100vw - 20px);
`;
