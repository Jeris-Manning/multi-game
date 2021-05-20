import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { PokerContext } from "../../Poker";

const HandDisplay = ({ afterDeal }) => {
  const { state, dispatch } = useContext(PokerContext);

  return afterDeal === true ? (
    <PokerHandDiv>
      {state.hand.map((card, id) => {
        return (
          <CardDiv
            key={id}
            onClick={() => {
              let holdState = state.hand[id].held;
              holdState = !holdState;
              dispatch({
                type: "TOGGLE_HOLD",
                payload: { holdState: holdState, id: id },
              });
            }}>
            <Card card={card} id={id} />
            <HeldDisplay>
              <Held
                className={card.held && state.phase !== "begin" ? "" : "scram"}>
                HELD
              </Held>
            </HeldDisplay>
          </CardDiv>
        );
      })}
    </PokerHandDiv>
  ) : (
    <HandDisplayDiv>
      <PokerHandDiv>
        {state.hand.map((card, id) => {
          return (
            <CardDiv key={id}>
              <Card card={card} id={id} />
              <HeldDisplay />
            </CardDiv>
          );
        })}
      </PokerHandDiv>
    </HandDisplayDiv>
  );
};

export default HandDisplay;

const HandDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  .scram {
    display: none;
  }
`;

const PokerHandDiv = styled.div`
  width: calc(100vw - 20px);
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  z-index: 24;

  @media (max-width: 550px) {
    width: 95%;
  }
}
`;

const CardDiv = styled.div`
  position: relative;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 550px) {
    margin: 0 1px;
  }
`;

const HeldDisplay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  height: 50px;
  user-select: none;

`;

const Held = styled.div`
  color: #00fa70;
  text-shadow: 0px 1px 3px black;
  font-family: bree, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2.1rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  border: solid 2px black;
  margin: 0;
  padding: 1px 15px 6px;
`;
