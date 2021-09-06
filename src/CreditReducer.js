const denoms = {
  dime: {
    name: "dime",
    multiplier: 10,
    value: 0.1,
    display: "10¢",
  },
  quarter: {
    name: "quarter",
    multiplier: 25,
    value: 0.25,
    display: "25¢",
  },
  dollar: {
    name: "dollar",
    multiplier: 100,
    value: 1,
    display: "$1",
  },
};

export const init = {
  denom: { ...denoms.quarter },
  credit: 2000,
  wager: 1,
  win: 0,
};

const CreditReducer = function (state, action) {
  switch (action.type) {
    case "CHOOSE_DENOM": {
      console.log("THIS FIRE?");
      return {
        ...state,
        denom: denoms[action.payload],
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
    case "WAGER_UP":
      if (state.wager < 10) {
        return {
          ...state,
          wager: state.wager + 1,
        };
      } else {
        return { ...state };
      }

    case "WAGER_DOWN":
      if (state.wager > 1) {
        return {
          ...state,
          wager: state.wager - 1,
        };
      } else {
        return { ...state };
      }

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

    default:
      return state;
  }
};

export default CreditReducer;
