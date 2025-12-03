import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!username) newErrors.username = true;
    if (!userEmail) newErrors.userEmail = true;
    if (!oldPassword) newErrors.oldPassword = true;
    if (!newPassword) newErrors.newPassword = true;
    if (!confirmPassword) newErrors.confirmPassword = true;


    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = true;
    }

    setErrors(newErrors);


    if (Object.keys(newErrors).length !== 0) return;

    
    setMessage("✔ Password Updated Successfully!");


    setTimeout(() => {
    }, 1000);
  };

  return (
    <div className="forget-container">
      <form className="forget-box" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={errors.username ? "error-input" : ""}
        />

        <input
          type="email"
          placeholder="Enter User Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className={errors.userEmail ? "error-input" : ""}
        />

        <input
          type="password"
          placeholder="Enter Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={errors.oldPassword ? "error-input" : ""}
        />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={errors.newPassword ? "error-input" : ""}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={errors.confirmPassword ? "error-input" : ""}
        />

        <button type="submit"  onClick={() => navigate("/")}>Update Password</button>

        {message && <p className="msg">{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
