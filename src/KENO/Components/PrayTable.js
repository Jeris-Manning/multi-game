import React, { useContext } from "react";
import { CreditContext } from "../../App";
import styled from "styled-components";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { kenoPays } from "../Utilities/kenoHelpers";
import Bee from "../assets/bee.png";
import Spider from "../assets/spider.png";
import HoneyTile from "../assets/honeyTile.png";

const PrayTable = ({ state }) => {
  const { creditState, creditDispatch } = useContext(CreditContext);

  return (
    <Table>
      <img className="bee" src={Bee} alt="cartoon bee" />
      <img className = "spider" src={Spider} alt="cartoon spider" />
      {state.picks > 1 ? (
        <GridWrapper>
          <div>Hit</div>
          <div>Win</div>
          {Object.keys(kenoPays[state.picks]).map((hit) => {
            return (
              kenoPays[state.picks][hit] > 0 && (
                <>
                  <div className="colOne">{`${hit}: `}</div>
                  <div className="colTwo">
                    {toCashString(
                      kenoPays[state.picks][hit] *
                        creditState.wager *
                        creditState.denom.multiplier
                    )}
                  </div>
                </>
              )
            );
          })}
        </GridWrapper>
      ) : (
        <></>
      )}
    </Table>
  );
};

export default PrayTable;

const Table = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 130px 0 100px 0px;
  background-image: url(${HoneyTile});
  font-family: "Open Sans", sans-serif;
  border: solid #333 3px;
  border-radius: 15px;
  min-height: 200px;
  z-index: 8;
  .bee {
    position: absolute;
    top: -121px;
    left: 17px;
  }
  .spider {
    position: absolute;
    bottom: -154px;
    right: 10px;
  }
`;

const GridWrapper = styled.div`
  border-radius: 15px;
  border: solid orange 4px;
  outline: solid #333 3px;
  margin: 30px 30px;
  padding: 10px;
  display: grid;
  grid-template-columns: 40px auto;
  grid-auto-flow: row;
  font-weight: 700;
  font-size: 1.6rem;
  column-gap: 20px;
  row-gap: 5px;
  background: rgba(51, 51, 51, 0.9);
  color: orange;
  text-shadow: 1px 1px 0 rgba(140, 90, 0, 0.8);
  min-height: 50px;
  width: 215px;
  .colOne {
    grid-column: 1;
    justify-self: right;
  }
  .colTwo {
    grid-column: 2;
  }
`;
