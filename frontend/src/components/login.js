import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Logo from "../img/Logo.png";
import SignupModal from './signup';
import axios from 'axios';

function Login({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3501/login', { email, password });
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));

      handleClose();
      if (user.role === 'admin') {
        navigate('/admin'); // Navigate to admin page
      } else {
        navigate('/'); // Navigate to logged home page
        window.location.reload(); // Reload the page to update state
        alert('Hello! Welcome to DreamParadise.');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Entered username or password is incorrect');
      setEmail('');
      setPassword('');
    }
  };

  if (!show) {
    return null;
  }

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="login-header">
          <img className="login-logo" src={Logo} alt="Logo" />
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
        </form>
      </div>

      <SignupModal show={showSignupModal} handleClose={handleCloseSignupModal} />
    </div>
  );
}

export default Login;
