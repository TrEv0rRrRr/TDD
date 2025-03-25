import { useState } from "react";

const MultifieldForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = [];
    if (email === "") newErrors.push("Email is required");
    if (password === "") newErrors.push("Password is required");
    if (confirmPassword !== password) newErrors.push("Passwords do not match");
    if (newErrors.length > 0) setErrors(newErrors);
    else {
      setErrors([]);
      setSubmittedEmail(email);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </label>
          {errors.includes("Email is required") && (
            <span>Email is required</span>
          )}
        </div>
        <div>
          <label>
            Password:
            <input
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </label>
          {errors.includes("Password is required") && (
            <span>Password is required</span>
          )}
        </div>
        <div>
          <label>
            Confirm password:
            <input
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </label>
          {errors.includes("Passwords do not match") && (
            <span>Passwords do not match</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedEmail && <p>Welcome, {submittedEmail}!</p>}
    </>
  );
};

export default MultifieldForm;
