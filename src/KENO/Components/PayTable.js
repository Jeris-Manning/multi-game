import React, { useContext } from "react";
import { CreditContext } from "../../App";
import styled from "styled-components";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { kenoPays } from "../Utilities/kenoHelpers";
import HoneyTile from "../assets/honeyTile.png";

const PayTable = ({ state }) => {
  const { creditState, creditDispatch } = useContext(CreditContext);

  return (
    <Table>
      <div className="header">Numbers Picked: {state.picks}</div>

      {state.picks > 1 ? (
        <div className="pays ">
          <div className="paysRow">
            <h2>Hit</h2><h2 className="winAmount">Win</h2>
          </div>

          {Object.keys(kenoPays[state.picks]).map((hit) => {
            return (
              kenoPays[state.picks][hit] > 0 && (
                <div key={`${state.picks}+${hit}`} className="paysRow">
                  <h2 className="hitCount">{`${hit}: `}</h2>
                  <h2 className="winAmount">
                    {toCashString(
                      kenoPays[state.picks][hit] *
                        creditState.wager *
                        creditState.denom.multiplier
                    )}
                  </h2>
                </div>
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
  height: 300px;
  width: 300px;
  background-image: url(${HoneyTile});
  font-family: "Open Sans", sans-serif;
  border-radius: 8px;
  .header {
    font-weight: 700;
    font-size: 1.8rem;
    background-color: #eda613;
    border-bottom: black 3px solid;
    width: 100%;
    /* margin-top: 10px; */
    border-radius: 8px 8px 0 0;
  }
  .pays {
    background: rgb(237, 166, 19);
    padding: 10px;
    width: 180px;
  }
  .paysRow {
    display: flex;
    justify-content: space-between;
  }

  .hitCount {
    display: flex;
    justify-content: flex-end;
    width: 32px;
  }

  .winAmount {
    /* width: 120px; */
  }
  /* h1 {
    font-weight: 700;
    font-size: 1.8rem;
    background-color: #eda613;
    border-bottom: black 3px solid;
    width: 100%;
  } */

  h2 {
    font-weight: 700;
    font-size: 1.4rem;
  }
`;
