import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    let newErrors = {};

    if (!username) newErrors.username = "Username is required!";
    if (!email) newErrors.email = "Email is required!";
    if (!password) newErrors.password = "Password is required!";

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success === true) {
        navigate("/home");
      }
    } catch (error) {
      setMessage("Server Error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="navbar">
          <button onClick={() => navigate("/singup")}>SignUp</button>
        </div>

        <img src="/login.png" alt="login" className="login-img" />

        <h2>Login User</h2>

        <input
          type="text"
          placeholder="Username"
          className={errors.username ? "error" : ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="err-text">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email ID"
          className={errors.email ? "error" : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="err-text">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          className={errors.password ? "error" : ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="err-text">{errors.password}</p>}


        <p className="forgot" onClick={() => navigate("/reset-password")} style={{ cursor: "pointer" }}>
          Forgot Password?
        </p>



        <button className="btn" onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "10px", color: "blue" }}>{message}</p>
      </div>
    </div>
  );
}

export default Login;
