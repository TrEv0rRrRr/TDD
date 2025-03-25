import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import UserProfile from "./UserProfile";

const name = "Trevor";
const age = 18;
const bio = "a";

test("should render the componente correctly", () => {
  render(<UserProfile name={name} age={age} bio={bio} />);
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(`Age: ${age}`)).toBeInTheDocument();
  expect(screen.getByText(bio)).toBeInTheDocument();
});

test("should render the not available text if no bio is provided", () => {
  render(<UserProfile name={name} age={age} />);
  expect(screen.getByText("No bio available")).toBeInTheDocument();
});
