import React, { useReducer } from "react";
import styled from "styled-components";
import KenoReducer, { init } from "./Utilities/KenoReducer";
import LeftBar from "./Components/LeftBar";
import BoardControl from "./Components/BoardControl";
import Wallet from "./Components/Wallet";
import Pebbles from "../KENO/assets/pebbles.png";

function Keno() {
  const [state, dispatch] = useReducer(KenoReducer, init);

  return (
    <KenoWrapper>
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
  background-image: url(${Pebbles});
  overflow: hidden;
`;

const KenoDiv = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  max-width: 1750px;
  /* flex-wrap: wrap-reverse; */
  /* justify-content: space-between; */
  align-items: center;
  justify-content: flex-end;
  background-image: url(${Pebbles});
  overflow: hidden;
`;
