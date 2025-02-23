import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Ensure this file exists

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    alert(`OTP sent to ${email}`);
    navigate("/reset-password");
  };

  return (
    <div className="forgot-container"> {/* Removed background image */}
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-input"
          required
        />
        <button onClick={handleSendOTP} className="forgot-btn">
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
