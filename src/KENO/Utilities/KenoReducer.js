import { clearKenoBoard } from "./KenoConstants";

export const init = {
  wager: 1,
  picks: 0,
  drawing: false,
  hits: 0,
  win: 0,
  board: clearKenoBoard(),
};

const Reducer = function (state, action) {
  switch (action.type) {
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

    case "BET_UP": {
      if (state.wager === 10) {
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

    case "START_DRAWING":
      return {
        ...state,
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
        win: action.creditsWon,
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
      let squares = { ...state.board };
      for (const [key, value] of Object.entries(squares)) {
        squares[key] = { ...value, drawn: false };
      }
      return {
        ...state,
        board: { ...squares },
        hits: 0
        // board: {
        //   ...state.board,
        //   [action.num]: {
        //     ...state.board[action.num],
        //     drawn: false,
        //   },
        // },
      };

    case "RESET_PICKS":
      return { ...state, board: clearKenoBoard() };

    default:
      return state;
  }
};

export default Reducer;
