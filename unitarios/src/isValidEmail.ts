export const isValidEmail = (email: string): boolean => {
  const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validator.test(email);
};
