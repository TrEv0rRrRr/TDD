import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./Counter";

test("should render the counter initially in zero", () => {
  render(<Counter />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("should increment the count when the user clicks the button", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

test("should decrement the count when the user clicks the button", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");

  fireEvent.click(incrementButton); // Llévalo a 1
  fireEvent.click(decrementButton); // Vuelve a 0

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("should restart the count when the user clicks the restart button", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  const resetButton = screen.getByText("Reset");

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("should stay at zero if the user tries to decrement below zero", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");

  fireEvent.click(decrementButton);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});
