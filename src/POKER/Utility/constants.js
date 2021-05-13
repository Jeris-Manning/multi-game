export const coins = {
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
