import { calcDiscount } from "../src/calcDiscount";

const invalidDiscounts = [-10, 101, 150, -40];
const invalidPrices = [-1, -60, -50, -100];

describe("Calculating the discount for a given price", () => {
  test("should be a function", () => {
    expect(calcDiscount).toBeInstanceOf(Function);
  });

  for (const invalidDiscount of invalidDiscounts) {
    test("should throw an specific error if the discount if greater than 100 or less than 0", () => {
      expect(() => calcDiscount(0, invalidDiscount)).toThrow(
        "The discount must be less than 100 and greater than 0"
      );
    });
  }

  for (const invalidPrice of invalidPrices) {
    test("should throw an specific error if the price if less or equal to 0", () => {
      expect(() => calcDiscount(invalidPrice, 0)).toThrow(
        "The price must be greater and different than 0"
      );
    });
  }

  test("should return the price discounted", () => {
    expect(calcDiscount(100, 20)).toBe(80);
  });
  
  test("should return the price discounted", () => {
    expect(calcDiscount(200, 0)).toBe(200);
  });

  test("should return the price discounted", () => {
    expect(calcDiscount(150, 50)).toBe(75);
  });
});
