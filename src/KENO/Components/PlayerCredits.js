import React from "react";
import { toCash } from "../../Constants";

const PlayerCredits = ({ state }) => {
  return (
    <div>
      <h1>{"Credits: " + toCash(state.credit / 100)}</h1>
    </div>
  );
};

export default PlayerCredits;
