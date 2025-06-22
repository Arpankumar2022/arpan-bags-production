import React from 'react';
import './LoginModal.css'; // optional for styling
import RegisterModal from "../popup/RegisterModal";
import {useState} from 'react';


const LoginModal = ({ show, onClose }) => {
  if (!show) return null;

   const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

      const openModal = () => setShowLogin(true);
      const closeModal = () => setShowLogin(false);

      const openLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
      };

      const openRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
      };


  return (
    <div className="login-overlay" onClick={onClose}>
          <div className="login-modal slide-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>×</button>
            <h2>Welcome Back!</h2>
            <p>Login to continue exploring Arpan Bags 👜</p>
            <input type="email" placeholder="📧 Email" />
            <input type="password" placeholder="🔒 Password" />
            <button className="login-btn">🔓 Login</button>
            <small>
              Don't have an account?{" "}
              <a href="#" onClick={() => { onClose(); openRegister(); }}>
                Sign Up
              </a>
            </small>
          </div>
        </div>
  );
};

export default LoginModal;