const cashFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toCash = (pennies) => {
  return cashFormatter.format(pennies);
};
