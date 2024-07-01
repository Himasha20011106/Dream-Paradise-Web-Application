import React, { useState, useEffect } from 'react';
import './signup.css';

function SignupPage({ show, handleClose }) {
  const [greeting, setGreeting] = useState('');

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

  return (
    <div className="signup-page">
      <div className="signup-content">
        <span className="close-signup" onClick={handleClose}>&times;</span>
        <div className="left-side">
          <h2>Welcome to DreamParadise</h2>
          <p>{greeting}</p>
        </div>
        <div className="right-side">
          <h2>Sign Up</h2>
          <form className="signup-form">
            <input type="text" name="fullName" placeholder="Full Name" required /><br />
            <input type="email" name="email" placeholder="Email" required /><br />
            <input type="password" name="password" placeholder="Password" required /><br />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required /><br />
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
