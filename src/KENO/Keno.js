import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import KenoReducer, { init } from "./Utilities/KenoReducer";
import styled from "styled-components";
import PayTable from "./Components/PayTable";
import PlayerCredits from "./Components/PlayerCredits";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

export const KenoContext = React.createContext(null);

function Keno() {
  const [state, dispatch] = useReducer(KenoReducer, init);
  return (
    <KenoContext.Provider value={{ state, dispatch }}>
      <KenoDiv>
        <div>
          <Display>
            <BoardControl />
            <section>
              <PayTable />
              <PlayerCredits className="credit" />
              <CashSlot className="credit" />
              <Link to="/">Game Selection Screen</Link>
            </section>
          </Display>
          <Wager />
        </div>
      </KenoDiv>
    </KenoContext.Provider>
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
`;
