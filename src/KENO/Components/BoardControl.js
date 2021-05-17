import React, { useContext } from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import { toCash, kenoPays } from "../Utilities/KenoConstants";
import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";

const BoardControl = () => {
  const { state, dispatch } = useContext(KenoContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  let draws = [];
  let hits = 0;
  let payChart = {};

  function handleDrawButtonClick() {
    if (state.picks < 2) {
      return;
    }
    if (state.wager * creditState.denom.multiplier > creditState.credit) {
      window.alert("Please Insert Cash to Play");
    } else if (state.wager > creditState.credit) {
      window.alert("Please Lower Wager or Insert Cash to Play");
    } else {
      payChart = kenoPays[state.picks];
      creditDispatch({ type: "SUB_CREDIT", payload: state.wager });
      dispatch({ type: "START_DRAWING" });
      dispatch({ type: "RESET_WIN" });
      dispatch({ type: "RESET_DRAWS" });

      draws = DrawEngine();

      let clearDraw = setInterval(drawNumbers, 100);
      let drawCount = 0;

      function drawNumbers() {
        if (drawCount < 20) {
          let pick = draws[drawCount];
          dispatch({ type: "DRAW", pick });
          if (state.board[pick].clicked) {
            hits++;
          }
          drawCount++;
        } else {
          clearInterval(clearDraw);
          settleDraw();
        }
      }
    }
  }

  function settleDraw() {
    let creditsWon = payChart[hits] * state.wager;
    if (creditsWon > 0) {
      const credits = creditsWon * creditState.denom.multiplier;
      creditDispatch({ type: "ADD_CREDIT", credits });
      dispatch({ type: "SET_WIN", creditsWon });
      dispatch({ type: "FINISH_DRAWING" });
    } else {
      dispatch({ type: "FINISH_DRAWING" });
    }
  }

  function handleClick(num) {
    if (state.drawing) {
      return;
    }
    if (draws !== []) {
      dispatch({ type: "RESET_DRAWS" });
    }

    if (state.board[num].clicked) {
      dispatch({ type: "DECREASE_PICK_COUNT" });
      dispatch({ type: "DESELECT", num });
    } else if (state.board[num].clicked === false && state.picks < 10) {
      dispatch({ type: "INCREASE_PICK_COUNT" });
      dispatch({ type: "SELECT", num });
    } else {
      return null;
    }
  }

  return (
    <BoardDiv>
      <WinPopper className={state.win > 0 ? "coolGuyClass" : "secret"}>
        <h1>YOU WIN!</h1>
        <h2>{toCash((state.win * creditState.denom.multiplier) / 100)}</h2>
      </WinPopper>
      <Board handleClick={handleClick} />
      <ButtonBox>
        <DrawBtn
          disabled={
            state.wager * creditState.denom.multiplier > creditState.credit
              ? true
              : false
          }
          onClick={() => {
            if (!state.drawing) {
              handleDrawButtonClick();
            }
          }}>
          DRAW
        </DrawBtn>
        <ResetBtn
          onClick={
            state.drawing
              ? null
              : () => {
                  dispatch({ type: "RESET_PICK_COUNT" });
                  dispatch({ type: "RESET_PICKS" });
                  dispatch({ type: "RESET_WIN" });
                }
          }>
          Clear Picks
        </ResetBtn>
        {state.wager * creditState.denom.multiplier > creditState.credit ? (
          <h3>Not enough credits for selected wager</h3>
        ) : null}
      </ButtonBox>
    </BoardDiv>
  );
};

export default BoardControl;

const BoardDiv = styled.div`
  .secret {
    display: none;
  }
`;

const WinPopper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 250px;
  background: yellow;
  top: 220px;
  left: 250px;
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    font-size: 3.8rem;
    margin: 0;
  }
`;

const DrawBtn = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: "red";
`;

const ResetBtn = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: "red";
`;

const ButtonBox = styled.div`
  display: flex;
`;
