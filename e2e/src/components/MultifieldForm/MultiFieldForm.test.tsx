import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import MultifieldForm from "./MultifieldForm";
import {
  fireUserEvents,
  getTestUtils,
  triggerValidationErrors,
} from "./testUtils/testUtils";

test("should render inputs and submit button", () => {
  render(<MultifieldForm />);
  expect(screen.getByPlaceholderText("Enter your email"));
  expect(screen.getByPlaceholderText("Enter your password"));
  expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
});

test("should show the greeting message if the inputs are filled correctly", () => {
  render(<MultifieldForm />);

  const {
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
  } = getTestUtils();

  fireUserEvents(
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
    false
  );

  expect(screen.getByText(`Welcome, ${email}!`)).toBeInTheDocument();
});

test("should show the errors if the inputs are filled incorrectly", () => {
  render(<MultifieldForm />);

  const { submitButton, confirmPasswordInput } = getTestUtils();
  triggerValidationErrors(submitButton, confirmPasswordInput);
});

test("should disappear the errors if the inputs are filled and submitted", () => {
  render(<MultifieldForm />);

  const {
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
  } = getTestUtils();

  triggerValidationErrors(submitButton, confirmPasswordInput);

  fireUserEvents(
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
    false
  );

  expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
  expect(screen.queryByText("Passwords do not match")).not.toBeInTheDocument();

  expect(screen.getByText(`Welcome, ${email}!`)).toBeInTheDocument();
});

test("should show error if passwords do not match", () => {
  render(<MultifieldForm />);

  const {
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
  } = getTestUtils();

  fireUserEvents(
    email,
    password,
    wrongPassword,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
    true
  );

  expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
});
