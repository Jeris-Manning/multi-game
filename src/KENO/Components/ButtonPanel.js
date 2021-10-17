import React, { useContext } from "react";
import styled from "styled-components";
import Wager from "./Wager";
import PlayerCredits from "./PlayerCredits";
import { CreditContext } from "../../App";
import BlackRock from "../assets/blackRock.png";

const ButtonPanel = ({ drawClick, state, dispatch }) => {
  const { creditDispatch } = useContext(CreditContext);
  function resetPicks() {
    dispatch({ type: "RESET_PICK_COUNT" });
    dispatch({ type: "RESET_PICKS" });
  }

  return (
    <ButtonBox>
      <Wager />
      <div className="gameplayButtons">
        <ResetBtn onClick={() => (state.drawing ? null : resetPicks())}>
          Clear Picks
        </ResetBtn>
      </div>
      <AddCredit onClick={() => dispatch({ type: "TOGGLE_WALLET" })}>
        Add Credits
      </AddCredit>

      <PlayerCredits className="credit" state={state} />
      <DrawBtn
        onClick={() => {
          if (!state.drawing) {
            drawClick();
          }
        }}>
        DRAW
      </DrawBtn>
    </ButtonBox>
  );
};

export default ButtonPanel;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const DrawBtn = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${BlackRock});
  background-size: cover;
  font-family: "Boogaloo", cursive;
  color: rgba(255, 255, 255, 0.8);
  font-size: 2.4rem;
  cursor: pointer;
  border-radius: 12px;
`;
const ResetBtn = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCredit = styled.div`
  width: 150px;
  height: 30px;
  background: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
