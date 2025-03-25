import { fireEvent, screen } from "@testing-library/react";
import { expect } from "vitest";

/**
 * Utility function to get test elements and data for the MultifieldForm component.
 *
 * @returns An object containing the following properties:
 * - `emailInput`: The email input element.
 * - `passwordInput`: The password input element.
 * - `confirmPasswordInput`: The confirm password input element.
 * - `submitButton`: The submit button element.
 * - `email`: A test email string.
 * - `password`: A test password string.
 * - `wrongPassword`: A wrong password string.
 */
export const getTestUtils = () => {
  const email = "test@example.com";
  const password = "1234";
  const wrongPassword = "654321";
  const emailInput = screen.getByPlaceholderText("Enter your email");
  const passwordInput = screen.getByPlaceholderText("Enter your password");
  const confirmPasswordInput = screen.getByPlaceholderText(
    "Enter your password again"
  );
  const submitButton = screen.getByRole("button", { name: "Submit" });

  return {
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
    email,
    password,
    wrongPassword,
  };
};

/**
 * Simulates user events for filling out and submitting a form.
 *
 * @param email - The email address to input.
 * @param password - The password to input.
 * @param wrongPassword - The incorrect password to input if `error` is true.
 * @param emailInput - The email input HTML element.
 * @param passwordInput - The password input HTML element.
 * @param confirmPasswordInput - The confirm password input HTML element.
 * @param submitButton - The submit button HTML element.
 * @param error - A boolean indicating whether to use the wrong password.
 */
export const fireUserEvents = (
  email: string,
  password: string,
  wrongPassword: string,
  emailInput: HTMLElement,
  passwordInput: HTMLElement,
  confirmPasswordInput: HTMLElement,
  submitButton: HTMLElement,
  error: boolean
) => {
  const finalPassword = error ? wrongPassword : password;
  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.change(confirmPasswordInput, { target: { value: finalPassword } });
  fireEvent.click(submitButton);
};

/**
 * Triggers validation errors by simulating user interactions on the form.
 *
 * This function changes the value of the confirm password input to an invalid value
 * and then clicks the submit button to trigger validation errors. It then checks
 * for the presence of specific error messages in the document.
 *
 * @param submitButton - The submit button element of the form.
 * @param confirmPasswordInput - The confirm password input element of the form.
 */
export const triggerValidationErrors = (
  submitButton: HTMLElement,
  confirmPasswordInput: HTMLElement
) => {
  fireEvent.change(confirmPasswordInput, { target: { value: 1 } });
  fireEvent.click(submitButton);

  expect(screen.getByText("Email is required")).toBeInTheDocument();
  expect(screen.getByText("Password is required")).toBeInTheDocument();
  expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
};
