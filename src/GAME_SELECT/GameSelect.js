import React from "react";
import { Link } from "react-router-dom";

const GameSelect = () => {
  return (
    <div>
      <Link to="/poker">
        <h2>Poker</h2>
      </Link>
      <Link to="/keno">
        <h2>Keno</h2>
      </Link>

      <h1>CHANGING BET CHANGES WINNER AMOUNT POPUP</h1>
    </div>
  );
};

export default GameSelect;
