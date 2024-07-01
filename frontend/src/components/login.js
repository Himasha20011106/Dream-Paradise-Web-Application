import React, { useState } from 'react';
import './login.css';
import Logo from "../img/Logo.png";

function Login({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="login-header">
          <img className="login-logo" src={Logo} alt="Logo" />
          <h3 className="login-name">DreamParadise</h3>
          <p className="login-welcome">Welcome Back. You are just one step away from your beautiful dream.</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="keep-logged-in" />
              <label htmlFor="keep-logged-in">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
          <div className="social-signin">
            <p>Or, Use social media to sign in</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="signup-link">
            <p>Don’t have an account?</p>
            <a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
