import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="./POKER/Poker.js">Poker</Link>
      <Link to="./KENO/Keno.js">Keno</Link>
    </div>
  );
};

export default Landing;
