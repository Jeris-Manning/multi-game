import React, { useContext } from "react";
import styled from "styled-components";
import AfterDeal from "./AfterDeal";
import AfterDraw from "./AfterDraw";
import Card from "./Card";
import { PokerContext } from "../../Poker";

const HandDisplay = () => {
  const { state, dispatch } = useContext(PokerContext);

  return (
    <HandDisplayDiv>
      {state.phase !== "afterDraw" ? (
        <PokerHandDiv>
          {AfterDeal()}
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
                    className={
                      card.held && state.phase !== "begin" ? "" : "scram"
                    }>
                    HELD
                  </Held>
                </HeldDisplay>
              </CardDiv>
            );
          })}
        </PokerHandDiv>
      ) : (
        <PokerHandDiv>
          {AfterDraw()}
          {state.hand.map((card, id) => {
            return (
              <CardDiv key={id}>
                <Card card={card} id={id} />
                <HeldDisplay>
                  <Held
                    className={
                      card.held && state.phase !== "begin" ? "" : "scram"
                    }>
                    HELD
                  </Held>
                </HeldDisplay>
              </CardDiv>
            );
          })}
        </PokerHandDiv>
      )}
    </HandDisplayDiv>
  );
};

export default HandDisplay;

const HandDisplayDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 50px;
  margin: 0 50px;
  max-height: 300px;
`;

const PokerHandDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 24;
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
  top: 50%;
  user-select: none;
`;

const Held = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1.4rem, 1rem + 1.25vw, 3rem);
  font-weight: 700;
  background: #00fa70;
  border-radius: 5px;
  border: solid 2px black;
  margin: 0;
  padding: 2px 5px;
  filter: drop-shadow(4px 4px 2px #ffc669) drop-shadow(-4px -4px 4px #ffc669);
`;
