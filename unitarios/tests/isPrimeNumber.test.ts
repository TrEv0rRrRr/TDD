import { isPrimeNumber } from "../src/isPrimeNumber";

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
const notPrimeNumbers = [4, 6, 8, 9, 10, 12, 14, 16];
const notValidNumbers = [1, 0, -1];

describe("Verifying if a number is prime", () => {
  test("should be a function", () => {
    expect(isPrimeNumber).toBeInstanceOf(Function);
  });

  for (const notValidNumber of notValidNumbers) {
    test("should throw if the number is less or equal than 1", () => {
      expect(() => isPrimeNumber(notValidNumber)).toThrow(
        `The number ${notValidNumber} is invalid because it is less than or equal to 1`
      );
    });
  }

  for (const primeNumber of primeNumbers) {
    test("should return true if is a prime number", () => {
      expect(isPrimeNumber(primeNumber)).toBe(true);
    });
  }

  for (const notPrimeNumber of notPrimeNumbers) {
    test("should return false if is a not prime number", () => {
      expect(isPrimeNumber(notPrimeNumber)).toBe(false);
    });
  }
});
