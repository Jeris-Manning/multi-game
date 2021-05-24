import React from "react";
import styled from "styled-components";
import jackFrog from "../../Assets/miscImages/jackFrog.png";
import plasticTile from "../../Assets/miscImages/plastic.png";
const GameBanner = () => {
  return (
    <BannerDiv>
      <img className="jack" src={jackFrog} alt="" />
    </BannerDiv>
  );
};

export default GameBanner;

const BannerDiv = styled.div`
  height: 120px;
  // width: 100%;
background: url(${plasticTile});
  border-bottom: black solid 5px;
  .jack {
    // margin-left: 20px;
    height: 100px;
  }
`;
