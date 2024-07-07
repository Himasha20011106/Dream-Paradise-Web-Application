import React, { useState, useEffect } from 'react';
import './signup.css';
import LoginModal from './login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage({ show, handleClose }) {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3501/register', { name, email, password })
      .then(res => {
        setIsLoggedIn(false);
        alert("Congratulations! Welcome to DreamParadise.");
        handleClose(); 
      })
      .catch(err => console.log(err));
  };  

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  if (!show) {
    return null;
  }

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-content">
        <span className="close-signup" onClick={handleClose}>&times;</span>
        <div className="left-side"></div>
        <div className="right-side">
          <h4 className='line1'>Welcome to <span>DreamParadise</span></h4>
          <h2 className='heading'>Sign Up Here</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required /><br />
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br />
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br />
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
        </div>
      </div>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
    </div>
  );
}

export default SignupPage;
