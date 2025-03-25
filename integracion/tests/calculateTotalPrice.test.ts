import { calculateTotalPrice } from "../src/calculateTotalPrice";

describe("Calculating the total price from a products cart", () => {
  test("should be a function", () => {
    expect(calculateTotalPrice).toBeInstanceOf(Function);
  });

  test("should throw an specific error if the cart is empty", () => {
    expect(() => calculateTotalPrice([])).toThrow("The cart is empty");
  });

  test("should return the correct total price from the given cart", () => {
    const cart = [
      { id: 1, name: "Laptop", price: 1200, quantity: 1 },
      { id: 2, name: "Mouse", price: 50, quantity: 2 },
      { id: 3, name: "Headphones", price: 150, quantity: 1 },
    ];

    expect(calculateTotalPrice(cart)).toBe(1450);
  });

  test("should calculate total correctly even if a product has quantity 0", () => {
    const cart = [
      { id: 1, name: "Laptop", price: 1200, quantity: 1 },
      { id: 2, name: "Mouse", price: 50, quantity: 0 },
      { id: 3, name: "Headphones", price: 150, quantity: 1 },
    ];
    expect(calculateTotalPrice(cart)).toBe(1350);
  });
});
