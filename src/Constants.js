export const denoms = {
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

const cashFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toCash = (pennies) => {
  return cashFormatter.format(pennies);
};

export const clearKenoBoard = () => {
  let clearBoard = {};
  for (let i = 1; i <= 80; i++) {
    clearBoard[i] = { clicked: false, drawn: false };
  }
  return clearBoard;
};

export const kenoPays = [
  null,
  null,
  { 0: 0, 1: 0, 2: 14 },
  { 0: 0, 1: 0, 2: 2, 3: 40 },
  { 0: 0, 1: 0, 2: 2, 3: 3, 4: 100 },
  { 0: 0, 1: 0, 2: 0, 3: 2, 4: 14, 5: 800 },
  { 0: 0, 1: 0, 2: 0, 3: 2, 4: 4, 5: 92, 6: 1500 },
  { 0: 0, 1: 0, 2: 0, 3: 1, 4: 2, 5: 15, 6: 348, 7: 7760 },
  { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 12, 6: 112, 7: 1500, 8: 8000 },
  { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 3, 6: 47, 7: 352, 8: 4700, 9: 9000 },
  {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 3,
    6: 28,
    7: 140,
    8: 1000,
    9: 4800,
    10: 10000,
  },
];

export const jbPays = {
  Royal_Flush: 800,
  Straight_Flush: 50,
  Four_of_a_Kind: 25,
  Full_House: 9,
  Flush: 5,
  Straight: 4,
  Three_of_a_Kind: 3,
  Two_Pair: 2,
  Jacks_or_Better: 1,
};

export const initHand = [
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
  { idx: "blank", held: false, showBack: true },
];

export const games = {
  selectionScreen: {
    name: "Select a Game",
    maxWager: 0,
  },
  keno: {
    name: "Classic Keno",
    maxWager: 10,
  },
  poker: {
    name: "Jacks or Better",
    maxWager: 5,
  },
};
