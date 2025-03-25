import { isPalindrome } from "../src/isPalindrome";

describe.skip("Verifying if a word is a palindrome or not", () => {
  test("should be a function", () => {
    expect(isPalindrome).toBeInstanceOf(Function);
  });

  test("should return true if the word is a palindrome", () => {
    expect(isPalindrome("reconocer")).toBe(true);
  });

  test("should return true if the word is a palindrome even so the word had capital letters", () => {
    expect(isPalindrome("RecOnoCeR")).toBe(true);
  });

  test("should return false if the word is not a palindrome", () => {
    expect(isPalindrome("hola")).toBe(false);
  });

  test("should return true if the word is a palindrome even with spaces", () => {
    expect(isPalindrome("anita lava la tina")).toBe(true);
  });

  test("should return true even with punctuation", () => {
    expect(isPalindrome("Anita, lava la tina.")).toBe(true);
  });
});
