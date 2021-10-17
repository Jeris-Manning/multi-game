import React, { useContext } from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { kenoPays } from "../Utilities/kenoHelpers";
import { CreditContext } from "../../App";

const BoardControl = ({ state, dispatch }) => {
  const { creditState, creditDispatch } = useContext(CreditContext);

  let draws = [];
  let worms = 0;
  let hits = 0;
  let payChart = {};
  let wormMult = [1, 1, 2, 5, 10];

  function getWorms() {
    let wormPool = DrawEngine();
    let wormCount = 0;
    let chosenOnes = [];

    while (wormCount < 4) {
      let worm = wormPool.pop();
      if (state.board[worm].clicked) {
        worm = null;
      } else {
        chosenOnes.push(worm);
        dispatch({ type: "WORM_HOLE", worm });
        wormCount++;
      }
    }

    return chosenOnes;
  }

  function resetDraws() {
    Object.keys(state.board).forEach((num) => {
      dispatch({ type: "RESET_DRAWS", num });
    });
    hits = 0;
    worms = 0;
  }

  function handleDrawButtonClick() {
    if (state.picks < 2) {
      return;
    }
    if (creditState.credit < 1) {
      window.alert("Please Insert Cash to Play");
    } else if (creditState.wager > creditState.credit) {
      window.alert("Please Lower Wager or Insert Cash to Play");
      dispatch({ type: "BET_THE_REST" });
    } else {
      payChart = kenoPays[state.picks];
      dispatch({ type: "START_DRAWING" });
      creditDispatch({ type: "SUB_CREDIT" });
      creditDispatch({ type: "RESET_WIN" });
      resetDraws();
      let oracle = getWorms();
      draws = DrawEngine();

      let clearDraw = setInterval(drawNumbers, 150);
      let drawCount = 0;

      function drawNumbers() {
        if (drawCount < 20) {
          let pick = draws[drawCount];

          dispatch({ type: "DRAW", pick });
          if (state.board[pick].clicked) {
            hits++;
          } else if (oracle.some((wiggler) => wiggler === pick)) {
            worms++;
            dispatch({ type: "SET_WORMS", worms });
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
    let win = payChart[hits] * creditState.wager * wormMult[worms];
    if (win > 0) {
      creditDispatch({ type: "SET_WIN", win });
      dispatch({ type: "FINISH_DRAWING" });
    } else {
      creditDispatch({ type: "SET_WIN", win });
      dispatch({ type: "FINISH_DRAWING" });
    }
  }

  function handleClick(num) {
    if (state.drawing) {
      return;
    }
    if (draws !== []) {
      resetDraws();
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
      <WinPopper className={creditState.win > 0 ? "coolGuyClass" : "secret"}>
        <h1>YOU WIN!</h1>
        <h2>{toCashString(creditState.win * creditState.denom.multiplier)}</h2>
      </WinPopper>
      <Board
        state={state}
        handleClick={handleClick}
        drawClick={handleDrawButtonClick}
        dispatch={dispatch}
      />
    </BoardDiv>
  );
};

export default BoardControl;

const BoardDiv = styled.div`
  .secret {
    display: none;
  }
  margin-top: 50px;
  border: solid blackm 2px;
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
  top: 10px;
  left: 10px;
  z-index: 222;
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    font-size: 3.8rem;
    margin: 0;
  }
`;
