import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import SimpleForm from "./SimpleForm";

test("should render input and button", () => {
  render(<SimpleForm />);
  expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
});

test("should submit the form and show the greeting", () => {
  render(<SimpleForm />);

  const input = screen.getByPlaceholderText("Enter your name");
  const button = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(input, { target: { value: "Trevor" } });
  fireEvent.click(button);

  expect(screen.getByText("Hello, Trevor!")).toBeInTheDocument();
});

test("should show an error if the input is empty", () => {
  render(<SimpleForm />);

  const button = screen.getByRole("button", { name: "Submit" });

  fireEvent.click(button);

  expect(screen.getByText("Name is required")).toBeInTheDocument();
});

test("should disappear the error if the input is filled and submitted", () => {
  render(<SimpleForm />);

  const input = screen.getByPlaceholderText("Enter your name");
  const button = screen.getByRole("button", { name: "Submit" });

  fireEvent.click(button);
  expect(screen.getByText("Name is required")).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Trevor" } });
  fireEvent.click(button);

  expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
  expect(screen.getByText("Hello, Trevor!")).toBeInTheDocument();
});
