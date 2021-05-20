import React from "react";
import styled from "styled-components";
import { Cards } from "../../Assets/Cards";

const Card = ({ card }) => {
  return (
    <CardSlot held={card.held}>
      <img
        className={card.showBack ? "scram" : ""}
        src={Cards[card?.idx]}
        alt="playing card"
        key={card?.idx}
      />
    </CardSlot>
  );
};

export default Card;

const CardSlot = styled.div`
  max-width: 206px;
  max-height: 288px;
  width: 206px;
  height: 288px;
  width: 100%;
  background-image: url(${Cards["back"]});


  img {
    width: 100%;
    filter: ${(props) =>
      props.held ? "drop-shadow(4px 4px 2px #bd1515) drop-shadow(-4px -4px 4px #bd1515)" : "none"};
  }
`;
