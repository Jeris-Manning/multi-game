import { wormMult } from "./KenoConstants";

const SettleDraw = (state, dispatch, creditState, creditDispatch) => {
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

export default SettleDraw;
