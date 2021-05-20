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

      <h2>MAKE FROG SIGN ABSOLUTE AND FLEXY FOR NICE TEXT</h2>
    </div>
  );
};

export default GameSelect;
