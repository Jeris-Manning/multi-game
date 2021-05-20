import React, { useReducer } from "react";
import styled from "styled-components";
import CardsDisplay from "./Components/CardsDisplay/CardsDisplay";
import CreditControls from "./Components/CreditControls/CreditControls";
import PokerReducer, { init } from "./Utility/PokerReducer";
import GameHeader from "./Components/GameHeader/GameHeader.js";
import wallFlies from "./Assets/miscImages/fliesTile.png";
import "./Poker.css";

export const PokerContext = React.createContext(null);

function Poker() {
  const [state, dispatch] = useReducer(PokerReducer, init);
  return (
    <PokerContext.Provider value={{ state, dispatch }}>
      <PokerContainer>
        <GameHeader />
        <CardsDisplay />
        <CreditControls />
      </PokerContainer>
    </PokerContext.Provider>
  );
}

export default Poker;

const PokerContainer = styled.div`
  background-color: #d8f0c1;
  background-image: url(${wallFlies});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 1300px;
  border-left: black 5px solid;
  border-right: black 5px solid;
  margin: 0 auto;
`;
