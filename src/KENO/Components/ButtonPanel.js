import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonPanel = ({ drawClick, state, dispatch }) => {
  function resetPicks() {
    dispatch({ type: "RESET_PICK_COUNT" });
    dispatch({ type: "RESET_PICKS" });
  }

  return (
    <ButtonBox>
      <Link to="/" className="linky">{`Game Select`}</Link>

      <button onClick={() => (state.drawing ? null : resetPicks())}>
        Clear Picks
      </button>

      <button
        onClick={() => {
          if (!state.drawing) {
            drawClick();
          }
        }}>
        Draw
      </button>
    </ButtonBox>
  );
};

export default ButtonPanel;

const ButtonBox = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  .linky {
    display: block;
    color: lightsteelblue;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    width: 160px;
    height: 50px;
    background: #111;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top: 3px #444 solid;
    border-right: 2px #444 solid;
    text-decoration: none;
    :active {
      border: none;
    }
  }

  button {
    color: orange;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    width: 150px;
    height: 50px;
    background: #111;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top: 3px #444 solid;
    border-right: 2px #444 solid;
    :active {
      border: none;
      margin-left: 2px;
    }
  }
`;
