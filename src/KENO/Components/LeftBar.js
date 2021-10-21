import React from "react";
import styled from "styled-components";
import PrayTable from "./PrayTable";

import PlayerCredits from "./PlayerCredits";

const LeftBar = ({ state, dispatch }) => {
  return (
    <LeftBarDiv>
      <PrayTable state={state} />

      <PlayerCredits state={state} dispatch={dispatch} />
    </LeftBarDiv>
  );
};

export default LeftBar;

const LeftBarDiv = styled.div`
  /* position: absolute; */
  /* left: 30px; */
  /* top: 30px; */
  z-index: 10;

  align-self: flex-start;
  margin-left: 50px;
`;
