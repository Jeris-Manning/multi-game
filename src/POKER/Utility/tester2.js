import React, { useReducer } from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import CardsDisplay from "./Components/CardsDisplay/CardsDisplay";
import CreditControls from "./Components/CreditControls/CreditControls";
import PokerReducer, { init } from "./Utility/PokerReducer";
import GameHeader from "./Components/GameHeader/GameHeader.js";
import GameBanner from "./Components/GameHeader/GameBanner.js";
import wallFlies from "./Assets/miscImages/fliesTile.png";
import invertFlies from "./Assets/miscImages/invertFlyTile.png";
import "./Poker.css";

export const PokerContext = React.createContext(null);

function Poker() {
  const [state, dispatch] = useReducer(PokerReducer, init);
  return (
    <PokerContext.Provider value={{ state, dispatch }}>
      <Div100vh>
        <AppWrap>
          <PokerContainer>
            <GameBanner />
            <GameHeader />
            <CardsDisplay />
            <CreditControls />
          </PokerContainer>
        </AppWrap>
      </Div100vh>
    </PokerContext.Provider>
  );
}

export default Poker;

const AppWrap = styled.div`
  // width: 100vw;
  background-color: #d8f0c1;
  background-image: url(${invertFlies});
  height: 100%;
  border: solid pink 5px;
`;

const PokerContainer = styled.div`
  background-color: #d8f0c1;
  background-image: url(${wallFlies});
  /* min-height: 100vh; */
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  border-left: black 5px solid;
  border-right: black 5px solid;
  border: solid yellow 7px;
  margin: 0 auto;
  @media (max-width: 1210px) {
    margin: 0;
    padding: 0;
    border: none;
  }
`;