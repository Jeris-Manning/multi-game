import React, { useContext, useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import { toCash } from "../../globalUtilities/helperFunctions";
import { kenoPays, wormMult, clean } from "../Utilities/KenoConstants";
import WormDigger from "../Utilities/WormDigger";
import DrawEngine from "../Utilities/DrawEngine";
// import { KenoContext } from "../Keno";
import { CreditContext } from "../../App";

const BoardControl = () => {
  // const { state, dispatch } = useContext(KenoContext);
  const { creditState, creditDispatch } = useContext(CreditContext);
  const [kenoBoard, setKenoBoard] = useState(clean());
  const [drawing, setDrawing] = useState(false);
  // const [kenoDraws, setKenoDraws] = useState([]);
  const [pickCount, setPickCount] = useState(0);
  const [wormBucket, setWormBucket] = useState([]);

  let payChart;
  let win;

  console.log(kenoBoard, "KENO BOARD");

  // function handleClick(num) {
  //   if (drawing) {
  //     return;
  //   }
    // if (kenoDraws !== []) {
    //   setKenoDraws([]);
    // }

    // if (kenoBoard[num]?.clicked === true) {
    //   payChart = kenoPays[pickCount - 1];
    //   setPickCount(pickCount - 1);
    //   let tempo = { ...kenoBoard };
    //   tempo[num].clicked = false;
    //   setKenoBoard({ ...tempo });
    // } else if (kenoBoard[num].clicked === false && pickCount < 10) {
    //   payChart = kenoPays[pickCount + 1];
    //   setPickCount(pickCount + 1);
    //   let tamp = { ...kenoBoard };
    //   tamp[num].clicked = true;
    //   setKenoBoard({ ...tamp });
    // } else {
    //   return null;
    // }
  //}

  function handleDrawButtonClick() {
    let hits = 0;
    let worms = 0;
    win = 0;

    if (pickCount < 2) {
      return;
    }
    if (creditState.credit < 1) {
      window.alert("Please Insert Cash to Play");
    } else {
      setDrawing(true);
      let tempBoard = [...kenoBoard];
      for (let i = 0; i < 80; i++) {
        kenoBoard[i] = { ...kenoBoard[i], drawn: false, worm: false };
      }
      setKenoBoard([...tempBoard]);
      // Maybe set pay chart here if trouble
      creditDispatch({ type: "SUB_CREDIT", payload: creditState.wager });
      setWormBucket(WormDigger(kenoBoard));

      const draws = DrawEngine();

      let clearDraw = setInterval(drawNumbers, 150);

      function drawNumbers() {
        if (draws.length > 0) {
          let pick = draws.pop();
          if (kenoBoard[pick].clicked) {
            console.log("HIT ONE");
            hits++;
          } else if (wormBucket.includes(pick)) {
            worms++;
            console.log("WORM COUNT", worms);
          }
        } else {
          clearInterval(clearDraw);
          settleDraw(hits, worms);
        }
      }
    }
  }

  function settleDraw(hitCount, wormCount) {
    console.log("HITCOUNT: ", hitCount, " WORM COUNT: ", wormCount);
    win = payChart[hitCount] * creditState.wager * wormMult[wormCount];

    console.log(win, "CHICKEN DINNER");

    setDrawing(false);
  }

  return (
    <BoardDiv>
      <WinPopper className={win > 0 ? "coolGuyClass" : "secret"}>
        <h1>YOU WIN!</h1>
        <h2>{toCash((win * creditState.denom.multiplier) / 100)}</h2>
      </WinPopper>
      <Board  board={kenoBoard} />
      <ButtonBox>
        <button onClick={drawing ? null : handleDrawButtonClick}>DRAW</button>
        <ResetBtn
          onClick={
            drawing
              ? null
              : () => {
                  // dispatch({ type: "RESET_PICK_COUNT" });
                  setKenoBoard(clean());
                  setPickCount(0);
                  payChart = {};
                  win = 0;
                }
          }>
          Clear Picks
        </ResetBtn>
      </ButtonBox>
    </BoardDiv>
  );
};

export default BoardControl;

const BoardDiv = styled.div`
  .secret {
    display: none;
  }
`;

const WinPopper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 250px;
  background: yellow;
  top: 220px;
  left: 250px;
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    font-size: 3.8rem;
    margin: 0;
  }
`;

const DrawBtn = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: "red";
`;

const ResetBtn = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: "red";
`;

const ButtonBox = styled.div`
  display: flex;
`;
