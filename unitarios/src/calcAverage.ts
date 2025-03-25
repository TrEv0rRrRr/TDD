export const calcAverage = (array: number[]): number => {
  const quantityOfNumbers = array.length;

  if (quantityOfNumbers === 0) throw new Error("The array is empty");

  let result = 0;

  for (const number of array) result += number;

  const average = result / quantityOfNumbers;

  return parseFloat(average.toFixed(2));
};
