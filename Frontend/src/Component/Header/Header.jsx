import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo2.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="MarketMinds Logo" />
          <h1 className="site-title">MarketMinds Digital Solutions</h1>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/servicesSection" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          </ul>
          
          {/* Contact section moved inside nav for mobile */}
          <div className="mobile-contact">
            <div className="phone-number">
              <FaPhone className="phone-icon" />
              <span>+91-9997957533</span>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/mark.etmindsdigitalsolutions" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </nav>

        {/* Desktop contact section */}
        <div className="desktop-contact">
          <div className="phone-number">
            <FaPhone className="phone-icon" />
            <span>+91-9997957533</span>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/mark.etmindsdigitalsolutions" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
