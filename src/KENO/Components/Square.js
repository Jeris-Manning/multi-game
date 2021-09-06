import React from "react";
import styled from "styled-components";
import Ant from "../assets/tallAntTile.png";
import Hill from "../assets/tallHillTile.png";
import Grass from "../assets/grassSquare.png";
import Hole from "../assets/wormHole.png";
import Worm from "../assets/tallWorm.png";

const Square = ({ drawn, clicked, num, handleClick, worm }) => {
  let art;

  if (clicked) {
    if (drawn) {
      art = <img num={num + "ant"} src={Ant} alt="ant" />;
    } else {
      art = <img num={num + "hill"} src={Hill} alt="ant hill" />;
    }
  } else if (worm) {
    if (drawn) {
      art = (
        <img className="wormClass" num={num + "worm"} src={Worm} alt="Worm" />
      );
    } else {
      art = (
        <img className="wormClass" num={num + "hole"} src={Hole} alt="hole" />
      );
    }
  } else
    art = (
      <div className="necromancer">
        <p className="corpseText">{num}</p>
        <p className="zombieText">{num}</p>
      </div>
    );

  return (
    <SquareDiv drawn={drawn} onClick={() => handleClick(num)}>
      {art}
    </SquareDiv>
  );
};

export default Square;

const SquareDiv = styled.div`
  box-sizing: border-box;
  font-size: 100%;
  width: 89px;
  height: 89px;
  margin: 0 -1px -1px 0;
  font-family: "Lobster", cursive;
  background-image: url(${Grass});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: ${(props) => (props.drawn ? "#68ddff" : "#fff568")};

  img {
    align-self: flex-end;
    padding: 0 25px 20px 0;
    width: 100px;
    height: 175px;
    transform: skew(20deg);
  }

  .wormClass {
    width: 60px;
    height: 100px;
    p {
      /* margin-top: 48px; */
    }
  }

  .necromancer {
    /* box-sizing: content-box; */
    position: relative;
    bottom: 70px;
    right: 25px;
  }

  .zombieText {
    transform: skew(40deg) rotateX(30deg) translate(-5px, -5px);
    position: absolute;
  }
  .corpseText {
    position: absolute;
    top: -22px;
    font-size: 3.5rem;
    text-shadow: 0px -3px 3px rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0, 0.1);
  }
`;
