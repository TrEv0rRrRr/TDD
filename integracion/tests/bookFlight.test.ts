import { bookFlight, seatsAvailable } from "../src/bookFlight";

describe("Booking a flight", () => {
  test("should return a specific error if the seat hasn't been found", () => {
    expect(() => bookFlight(6)).toThrow("Seat not found");
  });

  test("should return a message confirming the seat booked", () => {
    expect(bookFlight(5)).toBe("Seat C1 reserved successfully");
  });

  test("should throw an error if the seat is already reserved", () => {
    bookFlight(3); // Reservas por primera vez
    expect(() => bookFlight(3)).toThrow("Seat not found");
  });

  test("should throw an error if the seat id is invalid (negative)", () => {
    expect(() => bookFlight(-1)).toThrow("Seat not found");
  });

  test("should remove the seat from the available seats once reserved", () => {
    bookFlight(4);
    const seatStillAvailable = seatsAvailable.find((seat) => seat.id === 4);
    expect(seatStillAvailable).toBeUndefined();
  });
});
