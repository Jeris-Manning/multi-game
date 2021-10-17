import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoinSelect from "./Components/CoinSelect";
import KenoGraphic from "./assets/kenoLink.png";
import PokerGraphic from "./assets/pokerLink.png";

const Landing = () => {
  const [crispImage, setCrispImage] = useState("all");

  return (
    <LandingDiv>
      <h1>CREATURE CASINO</h1>
      <nav>
        <Link
          to="/keno"
          onMouseOver={() => {
            setCrispImage("bug");
          }}
          onMouseOut={() => {
            setCrispImage("all");
          }}>
          <img
            src={KenoGraphic}
            className={crispImage === "frog" ? "blurry" : ""}
            alt="Display of characters for keno game"
          />
        </Link>
        <Link
          to="/poker"
          onMouseOver={() => {
            setCrispImage("frog");
          }}
          onMouseOut={() => {
            setCrispImage("all");
          }}>
          <img
            src={PokerGraphic}
            className={crispImage === "bug" ? "blurry" : ""}
            alt="Display of characters for poker game"
          />
        </Link>
      </nav>
      <CoinSelect />
    </LandingDiv>
  );
};

export default Landing;

const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8f8;
  height: 100%;
  h1 {
    font-family: "Trade Winds", cursive;
    font-size: 5rem;
    margin: 20px 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 700px;

    img {
      width: 330px;
      height: auto;
      border: solid black 3px;
      border-radius: 12px;
      margin-bottom: 25px;
      :hover {
        border: solid 3px yellow;
      }
    }
    .blurry {
      filter: grayscale(100%);
    }
  }
`;
