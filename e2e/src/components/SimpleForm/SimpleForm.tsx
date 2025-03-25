import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "") setError("Name is required");
    else {
      setError("");
      setSubmittedName(name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
          </label>
          {error !== "" && <span>{error}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Hello, {submittedName}!</p>}
    </>
  );
};

export default SimpleForm;
