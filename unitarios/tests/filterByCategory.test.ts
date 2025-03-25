import { filterByCategory } from "../src/filterByCategory";

const products = [
  { id: 1, name: "Laptop Gamer", category: "tecnologia" },
  { id: 2, name: "Camiseta Oversize", category: "ropa" },
  { id: 3, name: "Smartphone", category: "tecnologia" },
  { id: 4, name: "Zapatillas deportivas", category: "calzado" },
  { id: 5, name: "Auriculares Bluetooth", category: "tecnologia" },
  { id: 6, name: "Jeans", category: "ropa" },
  { id: 7, name: "Sandalias", category: "calzado" },
];

describe("Filtering a products array by category", () => {
  test("should be a function", () => {
    expect(filterByCategory).toBeInstanceOf(Function);
  });

  test("should throw an specific error if the array is empty", () => {
    expect(() => filterByCategory([], "")).toThrow("The array is empty");
  });

  test("should throw an specific error the category is empty", () => {
    expect(() => filterByCategory(products, "")).toThrow(
      "You must enter a category"
    );
  });

  test("should return the filtered products by 'tecnologia'", () => {
    expect(filterByCategory(products, "tecnologia")).toStrictEqual([
      { id: 1, name: "Laptop Gamer", category: "tecnologia" },
      { id: 3, name: "Smartphone", category: "tecnologia" },
      { id: 5, name: "Auriculares Bluetooth", category: "tecnologia" },
    ]);
  });

  test("should return the filtered products by 'calzado'", () => {
    expect(filterByCategory(products, "calzado")).toStrictEqual([
      { id: 4, name: "Zapatillas deportivas", category: "calzado" },
      { id: 7, name: "Sandalias", category: "calzado" },
    ]);
  });

  test("should return the filtered products by 'ropa'", () => {
    expect(filterByCategory(products, "ropa")).toStrictEqual([
      { id: 2, name: "Camiseta Oversize", category: "ropa" },
      { id: 6, name: "Jeans", category: "ropa" },
    ]);
  });

  test("should return an empty array if the category doesn't exists", () => {
    expect(filterByCategory(products, "home")).toStrictEqual([]);
  });
});
