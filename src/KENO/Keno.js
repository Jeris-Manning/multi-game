import React, { useReducer } from "react";
import styled from "styled-components";
import KenoReducer, { init } from "./Utilities/KenoReducer";
import LeftBar from "./Components/LeftBar";
import BoardControl from "./Components/BoardControl";
import Wallet from "./Components/Wallet";
import Pebbles from "../KENO/assets/pebbles.png";
import Sand from "../KENO/assets/sandTile.png";

function Keno() {
  const [state, dispatch] = useReducer(KenoReducer, init);

  return (
    <KenoWrapper>
      <div className="darkGravel"></div>
      <KenoDiv>
        <LeftBar state={state} dispatch={dispatch} />
        <BoardControl state={state} dispatch={dispatch} />
        <Wallet state={state} dispatch={dispatch} />
      </KenoDiv>
    </KenoWrapper>
  );
}

export default Keno;

const KenoWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #be9e6d;
  background-image: url(${Sand});
  overflow: hidden;
`;

const KenoDiv = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  max-width: 1750px;
  filter: drop-shadow(7px 0 15px rgba(0, 0, 0, 0.8))
    drop-shadow(-7px 0 15px rgba(0, 0, 0, 0.8));
  border-top: none;
  border-bottom: none;
  /* align-items: center; */
  justify-content: flex-end;
  background-image: url(${Pebbles});
  overflow: hidden;
  z-index: 11;
`;
