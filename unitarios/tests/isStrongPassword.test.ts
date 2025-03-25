import { isStrongPassword } from "../src/isStrongPassword";

const strongPasswords = ["Aa1!aaaa", "Complex#123"];
const weakPasswords = ["password", "12345678", "Abcdefgh"];

describe("Validating an strong password", () => {
  test("should be a function", () => {
    expect(isStrongPassword).toBeInstanceOf(Function);
  });

  for (const strongPass of strongPasswords) {
    test("should return true if the password is valid and strong", () => {
      expect(isStrongPassword(strongPass)).toBe(true);
    });
  }

  for (const weakPass of weakPasswords) {
    test("should return false if the password is invalid and weak", () => {
      expect(isStrongPassword(weakPass)).toBe(false);
    });
  }
});
