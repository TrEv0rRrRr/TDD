import { payOrder, users } from "../src/payOrder";

describe("User payment process", () => {
  test("should throw a specific error if the user hasn't been found", () => {
    expect(() => payOrder(4, 0)).toThrow("User not found");
  });

  test("should throw a specific error if the amount is negative", () => {
    expect(() => payOrder(2, -5)).toThrow("Invalid amount");
  });

  test("should throw a specific error if the amount is greater than the user's amount", () => {
    expect(() => payOrder(2, 70)).toThrow("Insufficient balance");
  });

  test("should charge and user's balance must be well subtracted", () => {
    const id = 2;
    const user = users.find((user) => user.id === id);
    payOrder(id, 10);
    expect(user?.balance).toBe(40);
  });
});
