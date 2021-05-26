import React from "react";
import styled from "styled-components";
import Frog from "../../Assets/miscImages/handFrogTest.png";
// import FrogTosser from "./FrogTosser";

const HandFrog = () => {
  return (
    <HandFrogContainer>
      <SavageBox>
        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            d="M50,150c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve2"
            d="M50,140c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve3"
            d="M50,130c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve4"
            d="M50,120c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve5"
            d="M50,110c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve6"
            d="M50,100c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <path
            id="curve7"
            d="M50,150c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text fontSize="60" lengthAdjust="spacingAndGlyphs">
            <textPath
              textLength="400"
              textAnchor="middle"
              spacing="auto"
              startOffset="50%"
              xlinkHref="#curve">
              Party Fish
            </textPath>
          </text>
        </svg>
      </SavageBox>
      <FrogBox>
        <img src={Frog} alt="" />
      </FrogBox>
    </HandFrogContainer>
  );
};

export default HandFrog;

const HandFrogContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 508px;
`;

const SavageBox = styled.div`
  top: 50px;
  width: 100%;
  padding-top: 20px;

  // background: pink;
  position: absolute;
  font-family: "Boogaloo", cursive;
  font-weight: 400;
  // font-size: 90px;

  #curve {
    fill: transparent;
    stroke: purple;
    stroke-width: 10px;
  }

  #curve2 {
    fill: transparent;
    stroke: #4b0082;
    stroke-width: 10px;
  }
  #curve3 {
    fill: transparent;
    stroke: blue;
    stroke-width: 10px;
  }
  #curve4 {
    fill: transparent;
    stroke: green;
    stroke-width: 10px;
  }
  #curve5 {
    fill: transparent;
    stroke: yellow;
    stroke-width: 10px;
  }
  #curve6 {
    fill: transparent;
    stroke: orange;
    stroke-width: 10px;
  }
  #curve7 {
    fill: transparent;
    stroke: red;
    stroke-width: 10px;
  }

  textPath {
    text-align: center;
  }
  text {
    fill: green;
  }
`;

const FrogBox = styled.div``;
