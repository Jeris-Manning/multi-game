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
            <HeldDisplay>
              <Held
                className={card.held && state.phase !== "begin" ? "" : "scram"}>
                HELD
              </Held>
            </HeldDisplay>
            <Card card={card} id={id} />
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
              <HeldDisplay />
              <Card card={card} id={id} />
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
  div {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 95%;
  }
}
`;

const CardDiv = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 550px) {
    margin: 0 1px;
  }
`;

const HeldDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Held = styled.div`
  color: green;
  font-weight: 700;
  font-size: 2.1rem;
  margin: 0;
  padding: 0;
`;
