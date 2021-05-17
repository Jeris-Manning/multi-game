import React, { useContext } from "react";
import styled from "styled-components";
import { toCash, kenoPays } from "../Utilities/KenoConstants";
import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";

const PayTable = () => {
  const { state } = useContext(KenoContext);
  const { creditState } = useContext(CreditContext);
  return (
    <Table>
      <h1>Numbers Picked: {state.picks}</h1>
      {state.picks > 1 ? (
        <div>
          {Object.keys(kenoPays[state.picks]).map((hit) => {
            return (
              kenoPays[state.picks][hit] > 0 && (
                <h2 key={`${state.picks}+${hit}`}>
                  {`${hit}: ${toCash(
                    (kenoPays[state.picks][hit] *
                      state.wager *
                      creditState.denom.multiplier) /
                      100
                  )}`}
                </h2>
              )
            );
          })}
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
  background: silver;
`;
