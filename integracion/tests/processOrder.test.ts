import { processOrder } from "../src/processOrder";

describe("Processing an order for a product", () => {
  test("should throw an specific Error if the id is invalid", () => {
    expect(() => processOrder(-1, 0)).toThrow("Invalid id");
  });

  test("should throw an specific Error if the quantity is invalid", () => {
    expect(() => processOrder(1, -5)).toThrow("Invalid quantity");
  });

  test("should throw an specific Error if the product hasn't been found", () => {
    expect(() => processOrder(4, 4)).toThrow("Product not found");
  });

  test("should throw an specific Error if the product doesn't have enough stock", () => {
    expect(() => processOrder(1, 14)).toThrow("The stock is not enough");
  });

  test("should create an order for product 1 if everything is ok", () => {
    expect(processOrder(1, 4)).toBe("Order created for 4 of product 1");
  });

  test("should create an order for product 2 if everything is ok", () => {
    expect(processOrder(2, 2)).toBe("Order created for 2 of product 2");
  });
});
