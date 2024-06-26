import React, { useState } from 'react';
import './HomePage.css';
import Logo from "../img/Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle, faShoppingBag, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="contact-info">
          <a href="mailto:sample@example.com">sample@example.com</a>
          <span> | </span>
          <a href="tel:1111111111">1111111111</a>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        {isLoggedIn ? (
          <div className="user-info">
            <span
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              className="user-dropdown-toggle"
            >
              Hi Himasha Ka... <FontAwesomeIcon icon={faUserCircle} />
            </span>
            {dropdownVisible && (
              <div className="user-dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <a href="#"><FontAwesomeIcon icon={faUser} /> Account</a>
                <a href="#"><FontAwesomeIcon icon={faUserCircle} /> Profile</a>
                <a href="#"><FontAwesomeIcon icon={faShoppingBag} /> Orders</a>
                <a href="#"><FontAwesomeIcon icon={faHeart} /> Wishlist</a>
                <a href="#"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
              </div>
            )}
          </div>
        ) : (
          <div className="guest-info">
            <a href="#">Login</a>
            <span> | </span>
            <a href="#">Register</a>
          </div>
        )}
      </header>

      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>DreamParadise</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#videos">VIDEOS</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Perfect Choice for All</h1>
          <p>Your Special Events</p>
          <button className="enquiry-btn">Enquiry Now</button>
        </div>
      </section>

      <section className="services">
        <h2>Services</h2>
        {/* Add service details here */}
      </section>
    </div>
  );
}

export default HomePage;
