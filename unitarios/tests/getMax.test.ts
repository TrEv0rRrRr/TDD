import { getMax } from "../src/getMax";

describe.skip("obtaining the largest number in an numbers array", () => {
  test("should be a function", () => {
    expect(getMax).toBeInstanceOf(Function);
  });
  test("should return null if the array is empty", () => {
    expect(getMax([])).toBeNull();
  });

  test("should return the largest number", () => {
    expect(getMax([3, 7, 2, 9, 5])).toBe(9);
  });

  test("should return the largest number with negative values", () => {
    expect(getMax([-10, -20, -3, -7])).toBe(-3);
  });
});
