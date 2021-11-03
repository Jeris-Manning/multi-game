import React, { useContext } from "react";
import styled from "styled-components";
import HoneyTile from "../assets/honeyTile.png";
import { toCashString } from "../../globalUtilities/helperFunctions";
import { CreditContext } from "../../App";

const PlayerCredits = ({ dispatch }) => {
  const { creditState } = useContext(CreditContext);

  console.log(creditState.credit, " CREDIT");

  return (
    <CreditControlWrapper>
      <CreditDisplayDiv>
        <h1>{"Credits: " + toCashString(creditState.credit)}</h1>

        <AddCredit onClick={() => dispatch({ type: "TOGGLE_WALLET" })}>
          Add Credits
        </AddCredit>
      </CreditDisplayDiv>
    </CreditControlWrapper>
  );
};

export default PlayerCredits;

const CreditControlWrapper = styled.div`
  background-image: url(${HoneyTile});
  position: relative;
  margin-bottom: 50px;
  font-family: "Open Sans", sans-serif;
  border: solid #333 3px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: #eda613;
  border-bottom: black 3px solid;
`;

const CreditDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(51, 51, 51, 0.9);
  color: orange;
  text-shadow: 1px 1px 0 rgba(140, 90, 0, 0.8);
  margin: 30px 30px;
  padding: 10px;
  border-radius: 15px;
  border: solid orange 4px;
  outline: solid #333 3px;
`;

const AddCredit = styled.button`
  margin-top: 10px;
  width: 150px;
  height: 30px;
  background: #111;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px #777 solid;
  :active {
      border: none;
      margin-top: 12px;
    }
`;
