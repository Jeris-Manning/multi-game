import React from "react";
import { Link } from "react-router-dom";

const GameSelect = ({ state, dispatch }) => {
  return (
    <div>
      <Link
        to="/poker"
        onClick={() => {
          dispatch({ type: "POKER_RESET" });
        }}>
        <h2>Poker</h2>
      </Link>
      <Link
        to="/keno"
        onClick={() => {
          Object.keys(state.board).forEach((num) => {
            dispatch({ type: "RESET_DRAWS", num });
          });
          dispatch({ type: "RESET_HITS" });
          dispatch({ type: "RESET_WIN" });
        }}>
        <h2>Keno</h2>
      </Link>
    </div>
  );
};

export default GameSelect;
