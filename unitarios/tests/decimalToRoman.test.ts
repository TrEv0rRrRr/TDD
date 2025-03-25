import { decimalToRoman } from "../src/decimalToRoman";

describe.skip("Decimal to Roman Converter", () => {
  test("should convert basic numbers correctly", () => {
    expect(decimalToRoman(1)).toBe("I");
    expect(decimalToRoman(5)).toBe("V");
    expect(decimalToRoman(10)).toBe("X");
    expect(decimalToRoman(50)).toBe("L");
    expect(decimalToRoman(100)).toBe("C");
    expect(decimalToRoman(500)).toBe("D");
    expect(decimalToRoman(1000)).toBe("M");
  });

  test("should convert complex numbers correctly", () => {
    expect(decimalToRoman(4)).toBe("IV");
    expect(decimalToRoman(9)).toBe("IX");
    expect(decimalToRoman(40)).toBe("XL");
    expect(decimalToRoman(90)).toBe("XC");
    expect(decimalToRoman(400)).toBe("CD");
    expect(decimalToRoman(900)).toBe("CM");
  });

  test("should convert large numbers correctly", () => {
    expect(decimalToRoman(1994)).toBe("MCMXCIV");
    expect(decimalToRoman(2024)).toBe("MMXXIV");
    expect(decimalToRoman(3888)).toBe("MMMDCCCLXXXVIII");
  });

  test("should throw an error for numbers out of range", () => {
    expect(() => decimalToRoman(0)).toThrow();
    expect(() => decimalToRoman(4000)).toThrow();
    expect(() => decimalToRoman(-5)).toThrow();
  });
});
