

const cashFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toCash = (pennies) => {
  return cashFormatter.format(pennies);
};

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
