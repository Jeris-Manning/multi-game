import React from "react";
import styled from "styled-components";
import Wager from "./Wager";
import CashSlot from "./CashSlot";
import PlayerCredits from "./PlayerCredits";

const ButtonPanel = ({ drawClick, state, dispatch }) => {
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
      <CashSlot />
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
