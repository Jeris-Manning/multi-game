import React, {useContext} from "react";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const PlayerCredits = () => {
  const { creditState, creditDispatch } = useContext(CreditContext);
  return (
    <div>
      <h1>{"Credits: " + toCashString(creditState.credit)}</h1>
    </div>
  );
};

export default PlayerCredits;
