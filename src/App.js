import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setError("All fields are required");
      setSuccess("");
    } 
    else if (!email.includes("@")) {
      setError("Invalid Email Format");
      setSuccess("");
    } 
    else {
      setError("");
      setSuccess("Form submitted successfully!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>

        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <button type="submit">Submit</button>
      </form>

      <p style={{ color: "red" }}>{error}</p>
      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
}

export default App;
