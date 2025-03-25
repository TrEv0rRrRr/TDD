import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";
import UserList from "./UserList";

const mockUsers = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
];

beforeEach(() => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    json: () => Promise.resolve(mockUsers),
  } as Response);
});

test("should render loading initially", () => {
  render(<UserList />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("should fetch and render user names", async () => {
  render(<UserList />);

  const firstUser = await screen.findByText("Leanne Graham");
  const secondUser = await screen.findByText("Ervin Howell");

  expect(firstUser).toBeInTheDocument();
  expect(secondUser).toBeInTheDocument();

  const users = screen.getAllByTestId("user-item");
  expect(users).toHaveLength(2);
});
