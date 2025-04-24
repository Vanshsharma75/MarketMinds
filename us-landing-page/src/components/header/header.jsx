import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaLinkedin,FaPhone,FaBars,FaTimes} from "react-icons/fa";
import logo from "../../assets/logo2.png";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img className="logo1" src={logo} alt="MarketMinds Logo" loading="lazy" />
          <h1 className="site-title">MarketMinds Digital Solutions</h1>
        </Link>

        {/* MENU */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* DESKTOP CONTACT INFO */}
        <div className="desktop-contact">
          <div className="phone-number">
            <FaPhone className="phone-icon" />
            <span>+91-9997957533</span>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/marketmindsdigitalsolutions1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Menu toggle button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-icon">
            {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;