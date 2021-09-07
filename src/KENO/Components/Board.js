import React from "react";
import styled from "styled-components";
import Square from "./Square";
import BottomSoil from ".././assets/soilBottom.png";
import SideSoil from ".././assets/soilSide.png";

const Board = ({ state, handleClick }) => {
  let gridRows = [];
  var k = 0;
  for (let i = 0; i < 8; i++) {
    gridRows[i] = [];
    for (let j = 0; j < 10; j++) {
      gridRows[i].push(j + k + 1);
    }
    k += 10;
  }

  return (
    <BoardClamp>
      <GameBoard>
        {gridRows.map((row, idx) => (
          <Row key={idx} shift={idx + 1}>
            {row.map((num) => (
              <Square
                key={num}
                num={num}
                clicked={state.board[num].clicked}
                drawn={state.board[num].drawn}
                worm={state.board[num].worm}
                handleClick={handleClick}
              />
            ))}
          </Row>
        ))}
      </GameBoard>
      <BottomDirt />
      <SideDirt />
      <SideDirtSecond />
    </BoardClamp>
  );
};

export default Board;

const BoardClamp = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1100px;
  height: 720px;
  left: 20px;
  margin-right: 150px;
  margin-bottom: 40px;
`;

const GameBoard = styled.div`
  position: absolute;
  left: -85px;
  top: -30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform: rotateX(25deg) skew(-25deg);
  margin: 0 0 0 225px;
  height: 820px;
  width: 880px;
  z-index: 5;

`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BottomDirt = styled.div`
  position: absolute;
  bottom: 1px;
  left: 2px;
  width: 884px;
  height: 72px;
  background-image: url(${BottomSoil});
  background-repeat: repeat-x;
  background-size: contain;
  z-index: 25;
`;

const SideDirt = styled.div`
  position: absolute;
  right: -147px;
  top: 9px;
  width: 205px;
  height: 395px;
  background-image: url(${SideSoil});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 15;
  filter: drop-shadow(7px 5px 7px black);
`;

const SideDirtSecond = styled.div`
  position: absolute;
  right: 21px;
  top: 271px;
  width: 195px;
  height: 449px;
  background-image: url(${SideSoil});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 14;
  filter: drop-shadow(7px 5px 7px black);
`;
