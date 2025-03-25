import { booksAvailable, borrowBookById } from "../src/borrowBookById";

beforeEach(() => {
  booksAvailable.forEach((book) => (book.available = true));
});

describe("Book lending flow", () => {
  test("should throw a specific error if the book hasn't been found", () => {
    expect(() => borrowBookById(0)).toThrow("Book not found");
  });

  test("should throw a specific error if the requested book is not available", () => {
    borrowBookById(2);
    expect(() => borrowBookById(2)).toThrow('"1984" is already borrowed');
  });

  test("should throw an error if the book id is invalid (negative)", () => {
    expect(() => borrowBookById(-1)).toThrow("Book not found");
  });

  test("should return a confirm message with the book title", () => {
    expect(borrowBookById(2)).toBe("You borrowed 1984.");
  });
});
