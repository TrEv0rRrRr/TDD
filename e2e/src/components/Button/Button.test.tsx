import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Button from "./Button";

beforeEach(() => {
  render(<Button text="Hola" />);
});

describe("Testing react components", () => {
  test("should render the button with text", () => {
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });

  test("should have 'btn' class", () => {
    expect(screen.getByRole("button")).toHaveClass("btn");
  });
});
