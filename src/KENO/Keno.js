import React, { useReducer, useState } from "react";
import styled from "styled-components";
import kenoReducer, { init } from "./Utilities/kenoReducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Wallet from "./Components/Wallet";
import Pebbles from "../KENO/assets/pebbles.png";

function App() {
  const [state, dispatch] = useReducer(kenoReducer, init);

  return (
    <AppDiv>
      <BoardControl state={state} dispatch={dispatch} />
      <PayTable state={state} />
      <Wallet state={state} dispatch={dispatch} />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Pebbles});
  overflow: hidden;
`;
