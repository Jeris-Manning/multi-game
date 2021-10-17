import React, { useReducer } from "react";
import styled from "styled-components";
import KenoReducer, { init } from "./Utilities/KenoReducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Wallet from "./Components/Wallet";
import Pebbles from "../KENO/assets/pebbles.png";

function App() {
  const [state, dispatch] = useReducer(KenoReducer, init);

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
