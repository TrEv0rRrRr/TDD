import { isValidEmail } from "../src/isValidEmail";

const validEmails = [
  "test@example.com",
  "user.name+alias@domain.co",
  "email123@sub.domain.org",
];

const invalidEmails = [
  "testexample.com",
  "@domain.com",
  "user@.com",
  "user@domain",
];

describe("Validating an email", () => {
  test("should be a function", () => {
    expect(isValidEmail).toBeInstanceOf(Function);
  });

  for (const invalidEmail of invalidEmails) {
    test("should return false if the email is not valid", () => {
      expect(isValidEmail(invalidEmail)).toBe(false);
    });
  }

  for (const validEmail of validEmails) {
    test("should return true if the email is valid", () => {
      expect(isValidEmail(validEmail)).toBe(true);
    });
  }
});
