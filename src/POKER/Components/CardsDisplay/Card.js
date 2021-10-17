import React, { useContext } from "react";
import styled from "styled-components";
import { Cards } from "../../Assets/Cards";
import { PokerContext } from "../../Poker";

const Card = ({ card }) => {
  const { state } = useContext(PokerContext);
  return (
    <CardSlot held={card.held}>
      <img
        src={
          state.phase === "begin" || card.showBack
            ? Cards.back
            : Cards[card?.idx]
        }
        alt="playing card"
        key={card?.idx}
      />
    </CardSlot>
  );
};

export default Card;

const CardSlot = styled.div`
  width: 206px;
  height: 288px;
  height: 100%;
  width: 100%;
  min-width: 10px;

  img {
    user-select: none;
    min-width: 20px;
    width: inherit;
    height: inherit;
    filter: ${(props) =>
      props.held
        ? "drop-shadow(4px 4px 2px #bd1515) drop-shadow(-4px -4px 4px #bd1515)"
        : "none"};
  }
  div {
    min-height: 20px;
    min-width: 20px;
    width: 100%;
    height: 100%;
  }
`;
