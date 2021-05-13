import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PayTable from "./Components/PayTable";
import PlayerCredits from "./Components/PlayerCredits";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function Keno({ state, dispatch }) {

  return (
    <KenoDiv>
      <div>
        <Display>
          <BoardControl state={state} dispatch={dispatch} />
          <section>
            <PayTable state={state} />
            <PlayerCredits className="credit" state={state} />
            <CashSlot className="credit" dispatch={dispatch} />
            <Link to="/">Game Selection Screen</Link>
          </section>
        </Display>
        <Wager state={state} dispatch={dispatch} />
      </div>
    </KenoDiv>
  );
}

export default Keno;

const KenoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Display = styled.div`
    display: flex;
    flex-direction: row;
    // section {
    //     display: flex;
    //     flex-direction: column;
    //     .credit {
    //         margin-left: 50px;
    //     }
    }
`;
