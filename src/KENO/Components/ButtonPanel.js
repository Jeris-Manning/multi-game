import React, { useContext } from "react";
import styled from "styled-components";
import Wager from "./Wager";
import PlayerCredits from "./PlayerCredits";
import { CreditContext } from "../../App";

const ButtonPanel = ({ drawClick, state, dispatch }) => {
  const { creditDispatch } = useContext(CreditContext);
  function resetPicks() {
    dispatch({ type: "RESET_PICK_COUNT" });
    dispatch({ type: "RESET_PICKS" });
  }

  return (
    <>
      <Wager />
      <div className="gameplayButtons">
        <DrawBtn
          onClick={() => {
            if (!state.drawing) {
              drawClick();
            }
          }}>
          DRAW
        </DrawBtn>
        <ResetBtn onClick={() => (state.drawing ? null : resetPicks())}>
          Clear Picks
        </ResetBtn>
      </div>
      <AddCredit onClick={() => dispatch({ type: "TOGGLE_WALLET" })}>
        Add Credits
      </AddCredit>

      <PlayerCredits className="credit" state={state} />
    </>
  );
};

export default ButtonPanel;

const DrawBtn = styled.button`
  width: 150px;
  /* height: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
  color: "red";
`;
const ResetBtn = styled.button`
  width: 200px;
  /* height: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
  color: "red";
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
