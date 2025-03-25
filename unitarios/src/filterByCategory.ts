type Product = {
  id: number;
  name: string;
  category: string;
};

export const filterByCategory = (
  products: Product[],
  category: string
): Product[] => {
  if (products.length === 0) throw new Error("The array is empty");
  if (category === "") throw new Error("You must enter a category");

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return filteredProducts;
};
