import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../public/assets/logo2.png";
import Dropdown from "./Dropdown"; // Import the new Dropdown component

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="MarketMinds Logo" className="logo1" />
          <h1 className="site-title">MarketMinds Digital Solutions</h1>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/servicesSection" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li>
              <Link 
                to="/blog"
                onClick={() => {
                  closeMenu();
                  if (window.location.pathname === "/blog") {
                    window.location.reload(true);
                  }
                }}
              >
                Blog
              </Link>
            </li>
            <li><Dropdown /></li>

            {/* Use the new Dropdown component */}
          </ul>
        </nav>

        {/* Right-side contact + icons */}
        <div className="desktop-contact">
          <div className="phone-number">
            <FaPhone className="phone-icon" />
            <span>+91-9997957533</span>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/marketmindsdigitalsolutions1/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Hamburger menu button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
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
