import React from "react";
import styled from "styled-components";
import frogR from "../../Assets/miscImages/bannerFrog.png";
import frogL from "../../Assets/miscImages/bannerFrogFlip.png";
import flies from "../../Assets/miscImages/tangFlies.png";
const GameBanner = () => {
  return (
    <BannerDiv>
      <img src={frogL} alt="" />
      <div>
        <h1>Jacks or Better</h1>
      </div>
      <img className="rightFrog" src={frogR} alt="" />
    </BannerDiv>
  );
};

export default GameBanner;

const BannerDiv = styled.div`
  width: 100%;
  padding: 2px 1vw 0 1vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: black solid 1px;
  border-top: black solid 1px;
  box-shadow: 0 1px 2px #444;
  background-image: url(${flies});
  background-color: #ff9e00;

   h1 {
    color: #19ee40;
    font-size: 10rem;
    text-shadow: 3px 3px 3px #333;
  }
  img {
    height: 100px;
  }
  @media (max-width: 1000px) {
    justify-content: center;
    padding-left: 100px;
    .rightFrog {
      display: none;
    }
    img {
      height: 80px;
      position: absolute;
      left: 0;
    }
  }
  @media (max-width: 650px) {
    justify-content: center;
    padding: 2px 0;
    h1 {
      font-size: 7rem;
    }
    img {
      display: none;
    }
  }
`;
