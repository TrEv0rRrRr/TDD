import { isValidRomanNumeral } from "../src/isValidRomanNumeral";

describe.skip("Roman Numeral Validator", () => {
  test("should return true for valid roman numerals", () => {
    expect(isValidRomanNumeral("III")).toBe(true);
    expect(isValidRomanNumeral("IV")).toBe(true);
    expect(isValidRomanNumeral("MCMXCIV")).toBe(true);
    expect(isValidRomanNumeral("mmmdccclxxxviii")).toBe(true); // 3888
  });

  test("should return false for invalid roman numerals", () => {
    expect(isValidRomanNumeral("IIII")).toBe(false);
    expect(isValidRomanNumeral("VX")).toBe(false);
    expect(isValidRomanNumeral("IC")).toBe(false);
    expect(isValidRomanNumeral("MMMM")).toBe(false); // 4000 no permitido
  });
});
