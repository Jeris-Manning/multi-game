import { clean, kenoPays } from "./KenoConstants";
import DrawEngine from "./DrawEngine";

export const init = {
  picks: 0,
  drawing: false,
  hits: 0,
  win: 0,
  worms: 0,
  wormBucket: [],
  payChart: {},
  board: clean(),
};

const Reducer = function (state, action) {
  switch (action.type) {
    case "CLEAR_KENO_BOARD":
      return {
        ...state,
        board: clean(),
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

    case "GET_NEW_WORMS":
      let wormPool = DrawEngine();
      let wormCount = 0;
      let chosenOnes = [];

      while (wormCount < 4) {
        let worm = wormPool.pop();
        if (state.board[worm].clicked) {
          worm = null;
        } else {
          chosenOnes.push(worm);
          wormCount++;
        }
      }
      let wormyBoard = { ...state.board };
      for (let worm of chosenOnes) {
        wormyBoard[worm] = { ...wormyBoard[worm], worm: true };
      }
      return {
        ...state,
        board: { ...wormyBoard },
        wormBucket: [...chosenOnes],
      };

    case "SET_PAY_CHART":
      return {
        ...state,
        payChart: action.chart,
      };

    case "START_DRAWING":
      return {
        ...state,
        drawing: true,
        win: 0,
      };
    case "ADD_HIT":
      return {
        ...state,
        hits: state.hits + 1,
      };

    case "HIT_WORM":
      return {
        ...state,
        worms: state.worms + 1,
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
        squares[key] = { ...value, drawn: false, worm: false };
      }
      return {
        ...state,
        board: { ...squares },
        hits: 0,
        worms: 0,
        win: 0,
      };

    case "RESET_PICKS":
      return { ...state, board: [], picks: 0 };

    default:
      return state;
  }
};

export default Reducer;
