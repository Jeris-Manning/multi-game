
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
