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
    </div>
  );
};

export default GameSelect;
