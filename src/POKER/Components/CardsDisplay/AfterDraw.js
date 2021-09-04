import { useEffect, useContext } from "react";
import HandEvaluation from "./HandEvaluation";
import { PokerContext } from "../../Poker";
import { CreditContext } from "../../../App";

const AfterDraw = () => {
  const { state, dispatch } = useContext(PokerContext);
  const { creditState, creditDispatch } = useContext(CreditContext);

  let currentDeck = [...state.deck];
  let currentHand = [...state.hand];

  let indices = [];
  let popper = {};
  for (let i = 0; i < 5; i++) {
    if (state.hand[i].held === false) {
      indices.push(i);
    }
  }

  for (let k = currentDeck.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * k);
    const tempCard = currentDeck[k];
    currentDeck[k] = currentDeck[j];
    currentDeck[j] = tempCard;
  }

  for (let i = 0; i < indices.length; i++) {
    popper = currentDeck.pop();
    currentHand[indices[i]] = { ...popper, held: false, showBack: true };
  }

  useEffect(() => {
    console.log(state.phase);
    if (state.phase === "afterDraw") {
      dispatch({
        type: "DRAW_HAND",
        payload: { hand: currentHand, deck: currentDeck },
      });
      for (let i = 0; i < indices.length; i++) {
        setTimeout(() => {
          let currentCard = currentHand[indices[i]];
          dispatch({
            type: "SHOW_DRAWN_CARD",
            payload: { currentCard: currentCard, cardIdx: indices[i] },
          });
        }, i * 70 + 100);
      }

      let processedHand = HandEvaluation(currentHand);
      let credits =
        processedHand[1] * state.wager * creditState.denom.multiplier;
      dispatch({ type: "SET_FINAL_HAND_RANK", payload: [...processedHand] });
      creditDispatch({ type: "ADD_CREDIT", credits });
    }
  }, [state.phase]);
};

export default AfterDraw;
