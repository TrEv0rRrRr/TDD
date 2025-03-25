export const isPrimeNumber = (number: number): boolean => {
  if (1 >= number)
    throw new Error(
      `The number ${number} is invalid because it is less than or equal to 1`
    );

  for (let i = 2; i < number; i++) if (number % i === 0) return false;

  // ? Otra forma, más optimizada.
  // for (let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) return false;

  return true;
};
