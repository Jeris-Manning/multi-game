import React, { useReducer } from "react";
import styled from "styled-components";
import kenoReducer, { init } from "./Utilities/kenoReducer";
import PayTable from "./Components/PayTable";
import PlayerCredits from "./Components/PlayerCredits";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function App() {
  const [state, dispatch] = useReducer(kenoReducer, init);

  return (
    <AppDiv>
      <Display>
        <BoardControl state={state} dispatch={dispatch} />
        <section>
          <PayTable state={state} />
          <PlayerCredits className="credit" state={state} />
          <CashSlot className="credit" />
        </section>
      </Display>
      <Wager state={state} dispatch={dispatch} />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const Display = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 2px red;
  // section {
  //     display: flex;
  //     flex-direction: column;
  //     .credit {
  //         margin-left: 50px;
  //     }
`;
