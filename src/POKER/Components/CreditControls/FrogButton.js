import React, { useState } from "react";
import styled from "styled-components";
import ButtonFrog from "../../Assets/miscImages/buttonPushFrog.png";
import ButtonUp from "../../Assets/miscImages/drawButtonUpSmall.png";
import ButtonDown from "../../Assets/miscImages/drawButtonDownSmall.png";

const FrogButton = () => {
  const [poked, setPoked] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <FrogStyledButton>
      {/* <button>DRAW</button> */}

      <img
        className={pressed ? "buttonUp honk" : "buttonUp"}
        bUpPressed={pressed}
        src={ButtonUp}
        alt=""
      />
      <img
        className={pressed ? "buttonDown goose" : "buttonDown"}
        bDownPressed={pressed}
        onClick={() => setPoked(true)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        src={ButtonDown}
        alt=""
      />

      <img
        className={pressed ? "buttonFrog smash" : "buttonFrog"}
        src={ButtonFrog}
        alt=""
      />
    </FrogStyledButton>
  );
};

export default FrogButton;

const FrogStyledButton = styled.div`
  position: relative;
  width: 250px;
  height: 125px;
  .buttonFrog {
    pointer-events: none;
    width: 250px;
    height: auto;
    position: absolute;
    bottom: 20px;
    right: 50px;
    z-index: 5;
  }
  .buttonUp {
    position: absolute;
    top: 80px;
    // left: 45px;
    // width: 256px;
    // height: 105px;
    // height: auto;
    z-index: 2;
    // background-color: #bd1515;
    // color: white;
  }
  .buttonDown {
    position: absolute;
    top: 60px;
    // left: 45px;
    // width: 256px;
    // height: 105px;
    // height: auto;
    z-index: 2;
    // background-color: #bd1515;
    // color: white;
  }
  .honk {
    display: none;
  }
  .goose {
    top: 80px;
  }
  .smash {
    bottom: 0;
  }
`;
