
import { jbPays } from "./Utility/payouts";
import { coins } from "./Utility/constants";

console.log(MasterReducer.masterState, "THE MASTER");

const initHand = [
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
];

export const initReducer = {
  loadedGame: "Jacks or Better",
  pays: jbPays,
  wager: 1,
  credit: 2000,
  coin: coins["quarter"],
  showCash: false,
  phase: "begin",
  deck: [],
  hand: [...initHand],

};

const Reducer = function (state, action) {
  switch (action.type) {
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
      console.log(currentCards, "THE DISPATCHED");
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

      // console.log(currentCards, "THE DISPATCHED");
      return {
        ...state,
        hand: [...currentHand],
      };
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

    case "CHOOSE_DENOM": {
      return {
        ...state,
        coin: coins[action.payload],
      };
    }

    case "BET_UP": {
      if (state.wager === 5) {
        return state;
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

    case "ADD_CREDIT":
      return {
        ...state,
        credit: state.credit + action.credits,
      };

    case "SUB_CREDIT":
      return {
        ...state,
        credit: state.credit - state.coin.multiplier * state.wager,
      };

    default:
      return state;
  }
};

export default Reducer;
