import React, { useReducer } from "react";
import styled from "styled-components";
import KenoReducer, { init } from "./Utilities/KenoReducer";
import LeftBar from "./Components/LeftBar";
import Wager from "./Components/Wager";
import BoardControl from "./Components/BoardControl";
import Wallet from "./Components/Wallet";
import Pebbles from "../KENO/assets/pebbles.png";

function App() {
  const [state, dispatch] = useReducer(KenoReducer, init);

  return (
    <AppDiv>
      <LeftBar state={state} dispatch={dispatch} />
      <Wager />
      <BoardControl state={state} dispatch={dispatch} />
      <Wallet state={state} dispatch={dispatch} />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  /* flex-wrap: wrap-reverse; */
  justify-content: space-between;
  align-items: center;
  background-image: url(${Pebbles});
  overflow: hidden;
`;
