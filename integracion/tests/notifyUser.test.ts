import { notifyUser } from "../src/notifyUser";

describe("User notifying flow", () => {
  test("should throw an specific error if the id is invalid", () => {
    expect(() => notifyUser(-1, "")).toThrow(
      "Id must be greater and different than 0"
    );
  });

  test("should throw an specific error if the message is empty", () => {
    expect(() => notifyUser(1, "")).toThrow("Message must not be empty");
  });

  test("should return a confirmation message after notifying the user", () => {
    expect(notifyUser(1, "Hola bro")).toBe("Notification sent to Trevor: Hola bro");
  });
});
