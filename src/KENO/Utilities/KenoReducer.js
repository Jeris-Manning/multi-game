let clearBoard = {};
for (let i = 1; i <= 80; i++) {
  clearBoard[i] = { clicked: false, drawn: false, worm: false };
}

export const init = {
  picks: 0,
  drawing: false,
  hits: 0,
  worms: 0,
  board: { ...clearBoard },
  wallet: null,
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

    case "WORM_HOLE":
      return {
        ...state,
        board: {
          ...state.board,
          [action.worm]: { ...state.board[action.worm], worm: true },
        },
      };

    case "SET_WORMS":
      return {
        ...state,
        worms: action.worms,
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
            worm: false,
          },
        },
      };

    case "RESET_PICKS":
      return { ...state, board: { ...clearBoard } };

    case "TOGGLE_WALLET":
      return { ...state, wallet: !state.wallet };

    default:
      return state;
  }
};

export default Reducer;
