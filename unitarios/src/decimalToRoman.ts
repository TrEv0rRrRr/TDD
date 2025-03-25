const decimalToRomanMap: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export const decimalToRoman = (num: number): string => {
  if (num <= 0 || num >= 4000) throw new Error("Number out of range (1-3999)");

  let result = "";

  for (const [value, numeral] of decimalToRomanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
      // console.log({ result, num });
    }
  }

  return result;
};
