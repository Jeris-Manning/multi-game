import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardsDisplay from "./Components/CardsDisplay/CardsDisplay";
import DealButton from "./Components/DealButton";
import PayTable from "./Components/PayTable/PayTable";
import CreditControls from "./Components/CreditControls/CreditControls";
import GameHeader from "./Components/GameHeader/GameHeader.js";
import "./Poker.css";

function Poker({ state, dispatch }) {

  return (
    <PokerContainer>
      <GameHeader state={state} />
      <PayTable state={state} />
      <CardsDisplay state={state} dispatch={dispatch} />
      <CreditControls state={state} dispatch={dispatch} />
      <DealButton state={state} dispatch={dispatch} />
      <Link to= '/'>Game Selection Screen</Link>
    </PokerContainer>
  );
}

export default Poker;

const PokerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
