const nonsense = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

export const noPennies = (pennies) => {
  return nonsense.format(pennies);
};

const cashFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toCashString = (dollars) => {
  return cashFormatter.format(dollars * .01);
};
