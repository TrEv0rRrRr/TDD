const checkInventory = (productId: number, quantity: number): boolean => {
  if (0 >= productId) throw new Error("Invalid id");
  if (0 >= quantity) throw new Error("Invalid quantity");

  const inventory = [
    { id: 1, stock: 10 },
    { id: 2, stock: 5 },
    { id: 3, stock: 0 },
  ];

  const product = inventory.find((item) => item.id === productId);

  if (!product) throw new Error("Product not found");

  return product.stock >= quantity;
};

const createOrder = (productId: number, quantity: number): string =>
  `Order created for ${quantity} of product ${productId}`;

export const processOrder = (productId: number, quantity: number): string => {
  let isSufficientStock = false;

  try {
    isSufficientStock = checkInventory(productId, quantity);
  } catch (error) {
    throw new Error((error as Error).message);
  }

  if (!isSufficientStock) throw new Error("The stock is not enough");
  else return createOrder(productId, quantity);
};
