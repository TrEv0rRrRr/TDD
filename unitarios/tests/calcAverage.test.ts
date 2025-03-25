import { calcAverage } from "../src/calcAverage";

describe("Calculating the average value of a number array", () => {
  test("should be a function", () => {
    expect(calcAverage).toBeInstanceOf(Function);
  });

  test("should throw an specific error if the array is empty", () => {
    expect(() => calcAverage([])).toThrow("The array is empty");
  });

  test("should return a 2 average for this array", () => {
    expect(calcAverage([1, 2, 3])).toBe(2);
  });

  test("should return a 2.5 average for this array", () => {
    expect(calcAverage([1.5, 2.6, 3.4])).toBe(2.5);
  });
});
