const denoms = {
  dime: {
    name: "dime",
    multiplier: 10,
    display: "10¢",
  },
  quarter: {
    name: "quarter",
    multiplier: 25,
    display: "25¢",
  },
  dollar: {
    name: "dollar",
    multiplier: 100,
    display: "$1",
  },
};

export const init = {
  denom: { ...denoms.quarter },
  credit: 1000,
};

const CreditReducer = function (state, action) {
  switch (action.type) {
    case "CHOOSE_DENOM": {
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
        credit: state.credit - state.denom.multiplier * action.payload,
      };

    default:
      return state;
  }
};

export default CreditReducer;
