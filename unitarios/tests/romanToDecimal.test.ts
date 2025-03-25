import { romanToDecimal } from "../src/romanToDecimal";

describe.skip("Roman to Decimal Converter", () => {
  test("should convert single numerals correctly", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("M")).toBe(1000);
  });

  test("should convert compound numerals correctly", () => {
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("IX")).toBe(9);
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("XC")).toBe(90);
    expect(romanToDecimal("CD")).toBe(400);
    expect(romanToDecimal("CM")).toBe(900);
  });

  test("should convert complex numerals correctly", () => {
    expect(romanToDecimal("MCMXCIV")).toBe(1994);
    expect(romanToDecimal("MMXXIV")).toBe(2024);
    expect(romanToDecimal("MMMDCCCLXXXVIII")).toBe(3888);
  });

  test("should be case-insensitive", () => {
    expect(romanToDecimal("mmxxiv")).toBe(2024);
  });
});
