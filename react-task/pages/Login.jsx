
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please fill all fields!");
      setSuccess(false);
    } else {
      setMessage("Login Successful!");
      setSuccess(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {message && (
        <p style={{ color: success ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;
