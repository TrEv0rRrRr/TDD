type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const calculateTotalPrice = (cart: Product[]): number => {
  if (cart.length === 0) throw new Error("The cart is empty");
  return cart.reduce((acc, currentVal) => {
    return acc + currentVal.price * currentVal.quantity;
  }, 0);
};
