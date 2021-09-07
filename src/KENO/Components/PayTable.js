import React, { useContext } from "react";
import { CreditContext } from "../../App";
import styled from "styled-components";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { kenoPays } from "../Utilities/kenoHelpers";

const PayTable = ({ state }) => {
  const { creditState, creditDispatch } = useContext(CreditContext);

  return (
    <Table>
      <h1>Numbers Picked: {state.picks}</h1>
      {state.picks > 1 ? (
        <div>
          {Object.keys(kenoPays[state.picks]).map((hit) => {
            return (
              kenoPays[state.picks][hit] > 0 && (
                <h2 key={`${state.picks}+${hit}`}>
                  {`${hit}: ${toCashString(
                    kenoPays[state.picks][hit] *
                      creditState.wager *
                      creditState.denom.multiplier
                  )}`}
                </h2>
              )
            );
          })}
          <h2>{`Worms: ${state.worms}`}</h2>
        </div>
      ) : (
        <></>
      )}
    </Table>
  );
};

export default PayTable;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 500px;
  width: 300px;
  left: 0;
  top: 0;
  z-index: 10;
  background: silver;
  position: absolute;
`;
