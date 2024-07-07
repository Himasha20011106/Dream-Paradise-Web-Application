import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Logo from "../img/Logo.png";
import Service1 from "../img/services1.png";
import Service2 from "../img/services2.jpg";
import Service3 from "../img/services3.jpg";
import Service4 from "../img/services4.jpg";
import AboutUs from "../img/aboutus.jpg";
import Gallery1 from "../img/Gallery1.jpg";
import Gallery2 from "../img/Gallery2.jpg";
import Gallery3 from "../img/Gallery3.jpg";
import Gallery4 from "../img/Gallery4.jpg";
import Gallery5 from "../img/Gallery5.jpg";
import Gallery6 from "../img/Gallery6.jpg";
import Gallery7 from "../img/Gallery7.jpg";
import HomePageImage1 from "../img/HomePageImage1.jpg";
import HomePageImage2 from "../img/HomePageImage2.jpg";
import HomePageImage3 from "../img/HomePageImage3.jpg";
import HomePageImage4 from "../img/HomePageImage4.jpg";
import HomePageImage5 from "../img/HomePageImage5.jpg";
import HomePageImage6 from "../img/HomePageImage6.jpg";
import IdeasSection from "../img/ClientIdeas.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUserCircle, faShoppingBag, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from './ImageSlider';
import AutoImageSlider from './AutoImageSlider';
import TestimonialSlider from './TestimonialSlider';
import Map from './Map'; 
import LoginModal from './login';
import SignupModal from './signup';
import { useNavigate } from 'react-router-dom';
import EnquiryModal from '../pages/EnquiryForm';
import WeddingEnquiryModal from '../pages/WeddingEnquiryForm';

function HomePage() {
  const [isVisibleEnquiryModal, setIsVisibleEnquiryModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showWeddingEnquiryModal, setShowWeddingEnquiryModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const homePageImages = [
    HomePageImage1,
    HomePageImage2,
    HomePageImage3,
    HomePageImage4,
    HomePageImage5,
    HomePageImage6
  ];

  const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery5,
    Gallery6,
    Gallery4,
    Gallery7
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUsername(user.name);
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleEnquiryClick = () => {
    setShowEnquiryModal(true);
  };

  const handleWeddingEnquiryClick = () => {
    setShowWeddingEnquiryModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleCloseEnquiryModal = () => {
    setShowEnquiryModal(false);
  };

  const handleCloseWeddingEnquiryModal = () => {
    setShowWeddingEnquiryModal(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(true);
    setUsername('');
    navigate('/');
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="contact-info">
          <a href="mailto:dreamparadise@gmail.com">dreamparadise@gmail.com</a>
          <span> | </span>
          <a href="tel:+94-112-555-555">+94-112-555-555</a>
        </div>
        <div className="social-links">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        {isLoggedIn ? (
          /*<div className="user-info">
            <span className="user-dropdown-toggle">
              <FontAwesomeIcon className="user-icon" icon={faUserCircle}/> Hi {username}
            </span>
            <div className="user-dropdown">
              <a href="#" className='dropdown-account'><FontAwesomeIcon icon={faUser} /> Account</a>
              <a href="#"><FontAwesomeIcon icon={faUserCircle} /> Profile</a>
              <a href="#"><FontAwesomeIcon icon={faShoppingBag} /> Orders</a>
              <a href="#"><FontAwesomeIcon icon={faHeart} /> Wishlist</a>
              <a href="#" className='dropdown-logout' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
            </div>
          </div>*/
          <div className="guest-info">
            <a href="#" onClick={handleLoginClick}>Login</a>
            <span> | </span>
            <a href="#" onClick={handleSignupClick}>Register</a>
          </div>
        ) : (
          /*<div className="guest-info">
            <a href="#" onClick={handleLoginClick}>Login</a>
            <span> | </span>
            <a href="#" onClick={handleSignupClick}>Register</a>
          </div>*/
          <div className="user-info">
            <span className="user-dropdown-toggle">
              <FontAwesomeIcon className="user-icon" icon={faUserCircle}/> Hi {username}
            </span>
            <div className="user-dropdown">
              <a href="#" className='dropdown-account'><FontAwesomeIcon icon={faUser} /> Account</a>
              <a href="#"><FontAwesomeIcon icon={faUserCircle} /> Profile</a>
              <a href="#"><FontAwesomeIcon icon={faShoppingBag} /> Orders</a>
              <a href="#"><FontAwesomeIcon icon={faHeart} /> Wishlist</a>
              <a href="#" className='dropdown-logout' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
            </div>
          </div>
        )}
      </header>

      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>DreamParadise</span>
        </div>
        {isLoggedIn ? (
        <ul className="nav-links">
            <li><a href="#Home">HOME</a></li>
            <li><a href="#Services">SERVICES</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="#Gallery">GALLERY</a></li>
            <li><a href="#Testimonials">TESTIMONIALS</a></li>
            <li><a href="#Contactus">CONTACT US</a></li>
          </ul>
        ) : (
          <ul className="nav-links">
            <li><a href="#Home">HOME</a></li>
            <li><a href="#Services">SERVICES</a></li>
            <li><a href="#Aboutus">ABOUT US</a></li>
            <li><a href="#Gallery">GALLERY</a></li>
            <li><a href="#Testimonials">TESTIMONIALS</a></li>
            <li><a href="#Contactus">CONTACT US</a></li>
            <li><a href="#">PACKAGES</a></li>
          </ul>
        )}
      </nav>

      <section className="hero" id="Home">
        <AutoImageSlider images={homePageImages} />
        <div className="hero-content">         
          <h1>Perfect Choice for All</h1>
          <p>Your Special Events</p>
          <button className="home-enquiry-btn" onClick={handleEnquiryClick}>Enquiry Now</button>
        </div>
      </section>
      

      <section className="services" id="Services">
        <h2>Services</h2>
        <div className="services-section">
          <div className="services-box">
            <img src={Service1} alt="Wedding Ceremony" />
            <h2>Wedding Ceremony</h2>
            <p>A wedding is once in a lifetime event, and we want yours to be one of the grandest & memorable.</p>
            <button className="services-enquiry-btn" onClick={handleWeddingEnquiryClick}>Enquiry Now</button>
          </div>
          <div className="services-box">
            <img src={Service2} alt="Corporate Events" />
            <h2>Corporate Events</h2>
            <p>We serve corporate guests with the luxurious hospitality, exceptional amenities, and graceful services.</p>
            <button className="services-enquiry-btn">Enquiry Now</button>
          </div>
          <div className="services-box">
            <img src={Service3} alt="Birthday Parties" />
            <h2>Birthday Parties</h2>
            <p>Our venue is ideal place for organizing all types of birthday parties for your loved ones.</p>
            <button className="services-enquiry-btn">Enquiry Now</button>
          </div>
          <div className="services-box">
            <img src={Service4} alt="Social Events" />
            <h2>Social Events</h2>
            <p>Our place is a perfect venue for hosting all kinds of social events making a social event real fun.</p>
            <button className="services-enquiry-btn">Enquiry Now</button>
          </div>
        </div>
      </section>

      <section className="aboutus" id="Aboutus">
        <div className="aboutus-section">
          <div className="aboutus-description">
            <h2>About Us</h2>
            <p>We, dummy company located in area, city, state have various spaces that are ideal for all your functions. Our banquet hall is an excellent choice for entertaining your guests for all your events like marriages, birthdays etc. We arrange different types of services like live orchestra & ghazal for your events. Our main motto is customer satisfaction at the highest level. Our friendly staff extend their hospitality towards your guests and ensure their comfort at all times.</p>
          </div>
          <div className="image">
            <img src={AboutUs} alt="Image" />
          </div>
        </div>
      </section>

      <section className="gallery" id="Gallery">
        <h2>Gallery</h2>
        <ImageSlider images={galleryImages} />
      </section>

      <section className="client-ideas" id="Testimonials">
        <h2>Happy Clients</h2>
        <div className="client-ideas-section">
          <div className="client-ideas-image">
            <img src={IdeasSection} alt="Image" />
          </div>
          <div className="client-ideas-slider">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="contact-us" id="Contactus">
        <h2>Contact Us</h2>
        <div className="contact-details-section">
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>+94-112-555-555</p>
            <p>dreamparadise@gmail.com</p>
          </div>
          <div className="contact-details">
            <h3>Address</h3>
            <p>area, city, landmark, pincode</p>
          </div>
          <div className="contact-details">
            <h3>Business Hours</h3>
            <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
          <div className='contact-form'>
            <div className='contact-form-left'>
              <input type="text" name="FullName" placeholder="Full Name" className='Contact-Form-Input'/><br />
              <input type="text" name="ContactNumber" placeholder="Contact Number" className='Contact-Form-Input'/><br />
              <input type="email" name="Email" placeholder="E-mail" className='Contact-Form-Input'/><br />
            </div>
            <div className='contact-form-right'>
              <textarea name="Message" rows="4" cols="50" placeholder="Message" className='Contact-Form-Textarea'></textarea><br/>
            </div>  
            </div>         
            <button className="contactus-btn">Submit</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <Map />
      </section>

      <section className="footer-section">
          <div className="footer-section-items-links">
              <a className="link" href='#Home'>HOME</a><br/><br/>
              <a className="link" href='#Aboutus'>ABOUT US</a><br/><br/>
              <a className="link" href=''>PRIVACY POLICY</a><br/><br/>
              <a className="link" href='#Services'>SERVICES</a><br/><br/>
              <a className="link" href='#Gallery'>GALLERY</a><br/><br/>
              <a className="link" href='#Testimonials'>TESTIMONIALS</a><br/><br/>
              <a className="link" href='#Contactus'>CONTACT US</a><br/><br/>
          </div>
          <div className="footer-section-items-address">
            <h4>Address</h4>
            <p>area, city, landmark, pincode</p>
          </div>
          <div className="footer-section-items-call">
            <h4>Call</h4>
            <div className="numbers" >
              <p>+94-112-555-555</p>
              <p>+94-112-555-666</p>
              <p>+94-112-555-777</p>
            </div>
          </div>
          <div className="footer-section-items-email">
            <h4>E-mail</h4>
            <p>dreamparadise@gmail.com</p>
          </div>
          <div className="footer-section-items-connect">
            <h4>Connect</h4>
            <div className="social-connect">
              <a href="#" className='social-icon'><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className='social-icon'><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href="#" className='social-icon'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className='social-icon'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className='social-icon'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
      </section>

      <p className='Bottom'>DreamPradise Hall © 2024, All Rights Reserved. Developed by Himasha.</p>

      <LoginModal show={showModal} handleClose={handleCloseModal} />
      <SignupModal show={showSignupModal} handleClose={handleCloseSignupModal} />
      <EnquiryModal show={showEnquiryModal} handleClose={handleCloseEnquiryModal} />
      <WeddingEnquiryModal show={showWeddingEnquiryModal} handleClose={handleCloseWeddingEnquiryModal} />
    </div>
  );
}

export default HomePage;
