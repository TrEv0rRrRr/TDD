import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ToDo from "./ToDo";

const tasks = ["Study testing", "Walk the dog", "Read a book"];

test("should render 'No tasks available' text if the tasks list is empty", () => {
  render(<ToDo tasks={[]} />);
  expect(screen.getByText("No tasks available")).toBeInTheDocument();
});

test("should render the task list", () => {
  render(<ToDo tasks={tasks} />);
  for (const task of tasks) expect(screen.getByText(task)).toBeInTheDocument();
});
