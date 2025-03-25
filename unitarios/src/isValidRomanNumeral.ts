export const isValidRomanNumeral = (romanNumeral: string): boolean => {
  const validator =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  return validator.test(romanNumeral);
};
