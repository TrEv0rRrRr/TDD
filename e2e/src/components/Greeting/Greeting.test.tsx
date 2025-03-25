import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Greeting from "./Greeting";
import GreetingButton from "./GreetingButton";
import App from "../../App";

const handleClick = vi.fn();

test("should render the greeting with the name", () => {
  render(<Greeting name="Trevor" />);
  expect(screen.getByText("Hello, Trevor!")).toBeInTheDocument();
});

test("should render the default greeting when no name is provided", () => {
  render(<Greeting name="" />);
  expect(screen.getByText("Hello, guest!")).toBeInTheDocument();
});

test("should render the greeting button with the text Click me!", () => {
  render(<GreetingButton handleClick={handleClick} />);
  expect(screen.getByRole("button")).toHaveTextContent("Click me!");
});

test("should call the onClick function when clicked", () => {
  render(<GreetingButton handleClick={handleClick} />);

  const button = screen.getByText("Click me!");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled(); // Verifica que se llamó
});

test("should update greeting when button is clicked", () => {
  render(<App />);

  expect(screen.getByText("Hello, guest!")).toBeInTheDocument();

  const button = screen.getByText("Click me!");
  fireEvent.click(button);

  // Ahora el saludo debe actualizarse con "Trevor"
  expect(screen.getByText("Hello, Trevor!")).toBeInTheDocument();
});
