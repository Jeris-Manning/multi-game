import React, { useReducer } from "react";
import styled from "styled-components";
import HandDisplay from "./Components/CardsDisplay/HandDisplay";
import CreditControls from "./Components/CreditControls/CreditControls";
import PokerReducer, { init } from "./Utility/PokerReducer";
import GameHeader from "./Components/GameHeader/GameHeader.js";
import GameBanner from "./Components/GameHeader/GameBanner.js";
import wallFlies from "./Assets/miscImages/fliesTile.png";
import invertFlies from "./Assets/miscImages/invertFlyTile.png";

export const PokerContext = React.createContext(null);

function Poker() {
  const [state, dispatch] = useReducer(PokerReducer, init);
  return (
    <PokerContext.Provider value={{ state, dispatch }}>
      <AppWrap>
        <PokerContainer>
          <GameBanner />
          <GameHeader />
          <HandDisplay />
          <CreditControls />
        </PokerContainer>
      </AppWrap>
    </PokerContext.Provider>
  );
}

export default Poker;

const AppWrap = styled.div`
  background-color: #d8f0c1;
  background-image: url(${invertFlies});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PokerContainer = styled.div`
  background-color: #d8f0c1;
  background-image: url(${wallFlies});
  height: inherit;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  max-width: 1200px;
  border: black 3px solid;
  margin: 0 auto;
  @media (max-width: 1200px) {
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
  }
`;
