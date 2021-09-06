import React, { useContext } from "react";
import { toCash } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const PlayerCredits = () => {
  const { creditState } = useContext(CreditContext);
  return (
    <div>
      <h1>{"Credits: " + toCash(creditState.credit / 100)}</h1>
    </div>
  );
};

export default PlayerCredits;
