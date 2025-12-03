import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleSignup = () => {
    let newErrors = {
      username: !username,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
    };

    setErrors(newErrors);


    if (Object.values(newErrors).includes(true)) {
      setMessage("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, password: true, confirmPassword: true }));
      setMessage("Passwords do not match!");
      return;
    }

    setMessage("Signup successful!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="signup-container">
      <h2>Create your Account</h2>

      <input
        type="text"
        placeholder="Username"
        className={errors.username ? "error" : ""}
        onChange={(e) => {
          setUsername(e.target.value);
          setErrors({ ...errors, username: false });
        }}
      />

      <input
        type="email"
        placeholder="Email"
        className={errors.email ? "error" : ""}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors({ ...errors, email: false });
        }}
      />

      <input
        type="password"
        placeholder="Password"
        className={errors.password ? "error" : ""}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors({ ...errors, password: false });
        }}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className={errors.confirmPassword ? "error" : ""}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setErrors({ ...errors, confirmPassword: false });
        }}
      />

      <button onClick={handleSignup}>Create Account</button>

      <p className="message">{message}</p>

      <button className="login-btn" onClick={() => navigate("/")}>
        Go to Login
      </button>
    </div>
  );
}

export default Singup;
