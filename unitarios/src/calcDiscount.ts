export const calcDiscount = (price: number, discount: number) => {
  if (discount > 100 || 0 > discount)
    throw new Error("The discount must be less than 100 and greater than 0");
  if (0 >= price)
    throw new Error("The price must be greater and different than 0");

  const numberToSubtract = price * (discount / 100);
  return price - numberToSubtract;
};
