export const isStrongPassword = (password: string): boolean => {
  const validator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return validator.test(password);
};
