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
            onClick={
              state.phase !== "begin"
                ? () => {
                    let holdState = state.hand[id].held;
                    holdState = !holdState;
                    dispatch({
                      type: "TOGGLE_HOLD",
                      payload: { holdState: holdState, id: id },
                    });
                  }
                : null
            }>
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
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .scram {
    display: none;
  }
`;

const PokerHandDiv = styled.div`
  // width: calc(100vw - 20px);
  width: 100%;
  height: 100%;
  // width: auto;
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  z-index: 24;

  @media (max-width: 550px) {
    // width: 95%;
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
  height: 100%;

  @media (max-width: 550px) {
    margin: 0 1px;
  }
`;

const HeldDisplay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  top: 75%;
  height: clamp(1.4rem, 1rem + 1.25vw, 3rem);
  user-select: none;
`;

const Held = styled.h2`
  // color: #00fa70;

  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.4rem, 1rem + 1.25vw, 3rem);
  // font-size: 2.5rem;
  font-weight: 700;
  // background: rgba(0, 0, 0, 0.7);
  background: #00fa70;
  border-radius: 5px;
  border: solid 2px black;
  margin: 0;
  padding: 2px 5px;
  filter: drop-shadow(4px 4px 2px #ffc669) drop-shadow(-4px -4px 4px #ffc669);

  @media (max-width: 1200px) {
  //   font-size: 1.5rem;
  //   padding: 2px 2px;
  // }
`;
