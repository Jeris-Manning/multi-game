import React from "react";
import styled from "styled-components";
import PrayTable from "./PrayTable";
import PlayerCredits from "./PlayerCredits";
import Wager from "./Wager";

const LeftBar = ({ state, dispatch }) => {
  return (
    <LeftBarDiv>
      <PrayTable state={state} />

      <PlayerCredits state={state} dispatch={dispatch} />
      <Wager />
    </LeftBarDiv>
  );
};

export default LeftBar;

const LeftBarDiv = styled.div`
  /* position: absolute; */
  /* left: 30px; */
  /* top: 30px; */
  /* border: solid pink 2px; */
  z-index: 10;

  align-self: flex-start;
  margin-left: 50px;
`;
