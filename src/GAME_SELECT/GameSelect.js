import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoinSelect from "./Components/CoinSelect";
import WallFlies from "../POKER/Assets/miscImages/invertFlyTile.png";
import PaleFlies from "../POKER/Assets/miscImages/fliesTile.png";
import KenoGraphic from "./assets/kenoLink.png";
import PokerGraphic from "./assets/pokerLink.png";

const GameSelect = () => {
  const [crispImage, setCrispImage] = useState("all");

  return (
    <Wrap>
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
              className={crispImage === "bug" ? "" : "blurry"}
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
              className={crispImage === "frog" ? "" : "blurry"}
              alt="Display of characters for poker game"
            />
          </Link>
        </nav>
        <CoinSelect />
      </LandingDiv>
    </Wrap>
  );
};

export default GameSelect;

const Wrap = styled.div`
  background-image: url(${WallFlies});
  display: flex;
  justify-content: center;
  height: 100%;
`;

const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #8f8;
  background-image: url(${PaleFlies});
  height: 90%;
  width: 800px;
  border: black solid 2px;
  margin-top: 20px;
  border-radius: 15px;
  h1 {
    color: #34aa34;
    font-family: "Trade Winds", cursive;
    font-size: 5rem;
    margin: 20px 0;
    text-shadow: 2px 2px 2px black;
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
      filter: grayscale(30%);
    }
  }
`;
