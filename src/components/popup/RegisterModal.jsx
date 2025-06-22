// components/RegisterModal.js
import React from "react";
import "./LoginModal.css"; //


const RegisterModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal slide-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Create Account</h2>
        <p>Sign up to start your journey with Arpan Bags! 🎒</p>

        <input type="text" placeholder="👤 Full Name" />
        <input type="email" placeholder="📧 Email" />
        <input type="password" placeholder="🔒 Password" />
        <input type="text" placeholder="📱 Phone Number" />

        <button className="login-btn">📝 Register</button>

        <div className="login-footer">
          <small>Already have an account? <a href="#" onClick={onClose}>Login</a></small>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
