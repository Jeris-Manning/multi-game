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
  { 0: 0, 1: 0, 2: 15 },
  { 0: 0, 1: 0, 2: 2, 3: 40 },
  { 0: 0, 1: 0, 2: 4, 3: 30, 4: 100 },
  { 0: 0, 1: 0, 2: 0, 3: 4, 4: 20, 5: 160 },
  { 0: 0, 1: 0, 2: 0, 3: 2, 4: 10, 5: 100, 6: 350 },
  { 0: 0, 1: 0, 2: 0, 3: 1, 4: 3, 5: 12, 6: 115, 7: 400 },
  { 0: 0, 1: 0, 2: 0, 3: 0, 4: 2, 5: 10, 6: 112, 7: 250, 8: 600 },
  { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 3, 6: 20, 7: 80, 8: 500, 9: 800 },
  {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 3,
    6: 15,
    7: 60,
    8: 350,
    9: 800,
    10: 1000,
  },
];
