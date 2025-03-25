const romanToDecimalMap: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToDecimal = (romanNumeral: string): number => {
  let total = 0;
  let prevValue = 0;

  const upperRoman = romanNumeral.toUpperCase();

  for (let i = upperRoman.length - 1; i >= 0; i--) {
    const currentValue = romanToDecimalMap[upperRoman[i]];
    // console.log(currentValue);
    if (currentValue < prevValue) total -= currentValue;
    else {
      total += currentValue;
      prevValue = currentValue;
    }
  }

  // console.log({ total, prevValue });

  return total;
};
