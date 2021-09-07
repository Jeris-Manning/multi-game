import React from "react";
import styled from "styled-components";
import Ant from "../assets/tallAntTile.png";
import Hill from "../assets/tallHillTile.png";
import Grass from "../assets/easterGrass.png";
import Hole from "../assets/wormHole.png";
import Worm from "../assets/tallWorm.png";

const Square = ({ drawn, clicked, num, handleClick, worm }) => {
  let art;

  if (clicked) {
    if (drawn) {
      art = <img className="antClass" num={num + "ant"} src={Ant} alt="ant" />;
    } else {
      art = (
        <img
          className="hillClass"
          num={num + "hill"}
          src={Hill}
          alt="ant hill"
        />
      );
    }
  } else if (worm) {
    if (drawn) {
      art = (
        <img className="wormClass" num={num + "worm"} src={Worm} alt="Worm" />
      );
    } else {
      art = (
        <img className="holeClass" num={num + "hole"} src={Hole} alt="hole" />
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
  position: relative;
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
  z-index: 7;

  img {
    align-self: flex-end;
    /* position: absolute; */
    /* padding: 0 30px 20px 0px; */
    margin: 0 30px 15px 0;
    /* width: 100px;
    height: 150px; */
    transform: skew(20deg);
    z-index: 222;
    /* filter: drop-shadow(0px 0px 5px black); */
    /* box-shadow: 5px 5px 4px black; */
  }

  .wormClass {
    width: 60px;
    height: 100px;
  }

  .hillClass {
    width: 80px;
    height: 200px;
    margin-right: 60px;
    /* padding: 0 500px 0 -350px; */
  }
  .antClass {
    width: 75px;
    height: 150px;
    margin-right: 42px;
    margin-bottom: 22px;

  }
  .holeClass {
    width: 40px;
    margin-right: 20px;
    margin-bottom: 30px;
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
