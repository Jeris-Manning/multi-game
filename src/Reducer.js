import { denoms, games, initHand, clearKenoBoard } from "./Constants";

export const init = {
  wager: 1,
  denom: { ...denoms.quarter },
  credit: 1000,
  picks: 0,
  drawing: false,
  hits: 0,
  win: 0,
  board: clearKenoBoard(),
  showCash: false,
  phase: "begin",
  deck: [],
  hand: [...initHand],
};

const Reducer = function (state, action) {
  switch (action.type) {
    case "CHOOSE_DENOM": {
      return {
        ...state,
        denom: denoms[action.payload],
      };
    }
    case "BET_UP": {
      if (state.wager === games[action.payload].maxWager) {
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
    case "ADD_CREDIT":
      return {
        ...state,
        credit: state.credit + action.credits,
      };
    case "SUB_CREDIT":
      return {
        ...state,
        credit: state.credit - state.denom.multiplier * state.wager,
      };
    case "INCREASE_PICK_COUNT":
      return {
        ...state,
        picks: state.picks + 1,
      };
    case "DECREASE_PICK_COUNT":
      return {
        ...state,
        picks: state.picks - 1,
      };
    case "RESET_PICK_COUNT":
      return {
        ...state,
        picks: 0,
      };
    case "BET_THE_REST":
      return { ...state, wager: state.credit };

    case "START_DRAWING":
      return {
        ...state,
        credit: state.credit - state.wager * state.denom.multiplier,
        drawing: true,
      };
    case "ADD_HIT":
      return {
        ...state,
        hits: state.hits + 1,
      };

    case "RESET_HITS":
      return {
        ...state,
        hits: 0,
      };
    case "SET_WIN":
      return {
        ...state,
        win: action.win,
        credit: state.credit + action.win * state.denom.multiplier,
      };
    case "RESET_WIN":
      return {
        ...state,
        win: 0,
      };

    case "FINISH_DRAWING":
      return {
        ...state,
        drawing: false,
      };

    case "SELECT":
      return {
        ...state,
        board: {
          ...state.board,
          [action.num]: { ...state.board[action.num], clicked: true },
        },
      };

    case "DESELECT":
      return {
        ...state,
        board: {
          ...state.board,
          [action.num]: {
            ...state.board[action.num],
            clicked: false,
          },
        },
      };

    case "DRAW":
      return {
        ...state,
        board: {
          ...state.board,
          [action.pick]: {
            ...state.board[action.pick],
            drawn: true,
          },
        },
      };

    case "RESET_DRAWS":
      return {
        ...state,
        board: {
          ...state.board,
          [action.num]: {
            ...state.board[action.num],
            drawn: false,
          },
        },
      };

    case "RESET_PICKS":
      return { ...state, board: clearKenoBoard() };

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

    default:
      return state;
  }
};

export default Reducer;
