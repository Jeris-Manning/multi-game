import React from "react";
import styled from "styled-components";

import BlackRock from "../assets/blackRock.png";

const ButtonPanel = ({ drawClick, state, dispatch }) => {
  function resetPicks() {
    dispatch({ type: "RESET_PICK_COUNT" });
    dispatch({ type: "RESET_PICKS" });
  }

  return (
    <ButtonBox>
      <div className="gameplayButtons">
        <button onClick={() => (state.drawing ? null : resetPicks())}>
          Clear Picks
        </button>
      </div>

      <button
        onClick={() => {
          if (!state.drawing) {
            drawClick();
          }
        }}>
        DRAW
      </button>
    </ButtonBox>
  );
};

export default ButtonPanel;

const ButtonBox = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  button {
    /* width: 150px; */
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
  }
`;

// const DrawBtn = styled.button`
//   width: 150px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
//   background-image: url(${BlackRock});
//   background-size: cover;
//   font-family: "Boogaloo", cursive;
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 2.4rem;
//   cursor: pointer;
//   border-radius: 12px;
// `;
// const ResetBtn = styled.button`
//   width: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
