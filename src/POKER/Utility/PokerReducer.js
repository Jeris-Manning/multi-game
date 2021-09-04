import { initHand } from "./PokerConstants";

export const init = {
  wager: 1,
  credit: 1000,
  showCash: false,
  phase: "begin",
  deck: [],
  hand: [...initHand],
  finalHand: ["", 0],
};

const Reducer = function (state, action) {
  switch (action.type) {
    case "BET_UP": {
      if (state.wager === 5) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        wager: state.wager + 1,
      };
    }

    case "BET_DOWN": {
      if (state.wager === 1) {
        return state;
      }
      return {
        ...state,
        wager: state.wager - 1,
      };
    }

    case "POKER_RESET": {
      return {
        ...state,
        phase: "begin",
        deck: [],
        hand: [...initHand],
      };
    }

    case "DEAL_HAND": {
      return {
        ...state,
        hand: action.afterDeal.hand,
        deck: action.afterDeal.deck,
      };
    }

    case "DRAW_HAND": {
      return {
        ...state,
        hand: action.payload.hand,
        deck: action.payload.deck,
      };
    }
    case "SHOW_DRAWN_HAND": {
      let currentCards = action.currentHand;
      for (const card of currentCards) {
        card.showBack = false;
      }
      return {
        ...state,
        hand: [...currentCards],
      };
    }

    case "SHOW_DRAWN_CARD": {
      let currentHand = [...state.hand];
      let currentCard = action.payload.currentCard;
      currentCard.showBack = false;
      currentHand[action.payload.cardIdx] = { ...currentCard };
      return {
        ...state,
        hand: [...currentHand],
      };
    }

    case "SET_FINAL_HAND_RANK": {
      return { ...state, finalHand: [...action.payload] };
    }

    case "TOGGLE_HOLD": {
      let newHand = [...state.hand];
      newHand[action.payload.id].held = action.payload.holdState;
      return {
        ...state,
        hand: [...newHand],
      };
    }

    case "PHASE_CHANGE": {
      return {
        ...state,
        phase: action.payload,
      };
    }

    case "SHOW_CASH": {
      return {
        ...state,
        showCash: !state.showCash,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
