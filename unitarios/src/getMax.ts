export const getMax = (arr: number[]) => {
  if (arr.length === 0) return null;
  const arrSorted = [...arr].sort((a, b) => b - a);
  console.log({ largestNumber: arrSorted[0], arrSorted });

  return arrSorted[0];

  //? Otra manera, más directa
  //  return arr.length ? Math.max(...arr) : null;
};
