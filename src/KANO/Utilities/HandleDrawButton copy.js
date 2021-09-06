import React, { useContext } from "react";
import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";
import { kenoPays, wormMult } from "./KenoConstants";
import DrawEngine from "./DrawEngine";
// import SettleDraw from "./SettleDraw";

const HandleDrawButton = () => {
  const { state, dispatch } = useContext(KenoContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  console.log("DRAW BUTTON HERE");

  const SettleDraw = () => {
    console.log("LETS SETTLE THIS");
    // const { state, dispatch } = useContext(KenoContext);
    // const { creditState, creditDispatch } = useContext(CreditContext);

    let creditsWon =
      state.payChart[state.hits] * creditState.wager * wormMult[state.worms];
    if (creditsWon > 0) {
      const credits = creditsWon * creditState.denom.multiplier;
      creditDispatch({ type: "ADD_CREDIT", credits });
      dispatch({ type: "SET_WIN", creditsWon });
      dispatch({ type: "FINISH_DRAWING" });
    } else {
      dispatch({ type: "FINISH_DRAWING" });
    }
  };

  const fire = () => {
    if (state.picks < 2) {
      return;
    }
    if (creditState.wager * creditState.denom.multiplier > creditState.credit) {
      window.alert("Please Insert Cash to Play");
    } else {
      dispatch({ type: "SET_PAY_CHART", payload: kenoPays[state.picks] });
      creditDispatch({ type: "SUB_CREDIT", payload: creditState.wager });
      dispatch({ type: "START_DRAWING" });
      dispatch({ type: "RESET_DRAWS" });
      dispatch({ type: "GET_NEW_WORMS" });
      const draws = DrawEngine();

      let clearDraw = setInterval(drawNumbers, 100);
      let drawCount = 0;

      function drawNumbers() {
        if (drawCount < 20) {
          let pick = draws[drawCount];
          dispatch({ type: "DRAW", pick });
          if (state.board[pick].clicked) {
            dispatch({ type: "ADD_HIT" });
          } else if (state.board[pick].worm === true) {
            dispatch({ type: "HIT_WORM" });
          }
          drawCount++;
        } else {
          clearInterval(clearDraw);
          SettleDraw();
        }
      }
    }
  };

  return (
    <button
      disabled={
        creditState.wager * creditState.denom.multiplier > creditState.credit ||
        state.drawing === true
          ? true
          : false
      }
      onClick={state.drawing ? null : fire}>
      DRAW
    </button>
  );
};

export default HandleDrawButton;
