import React from "react";
import styled from "styled-components";

const SavageBox = () => {
  return (
    <SavageTrap>
      <div>
        {/* <svg viewBox="0 0 500 500">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text>
            <textPath
              xlinkHref="#curve"
              textLength="85%"
              lengthAdjust="spacingAndGlyphs">
              Party
            </textPath>
          </text>
        </svg> */}

        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text font-size="24" lengthAdjust="spacingAndGlyphs">
            <textPath
              // textLength="400"
              id="result"
              // method="align"
              textAnchor="middle"
              spacing="auto"
              startOffset="50%"
              xlinkHref="#curve">
              <tspan dy="-10">
                very long text very long text very long text
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </SavageTrap>
  );
};

export default SavageBox;

const SavageTrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  div {
    width: 100%;
    height: 100%;
    background: pink;
    font-family: "Boogaloo", cursive;
    font-weight: 400;
    // font-size: 60px;

    path {
      fill: transparent;
      stroke: black;
    }
    textPath {
      text-align: center;

    }
    text {
      fill: green;
    }
  }
`;
