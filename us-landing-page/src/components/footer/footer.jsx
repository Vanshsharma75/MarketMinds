import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './footer.css';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>MarketMinds Digital Solutions specializes in comprehensive digital services, helping businesses thrive in the digital landscape with innovative solutions and strategic expertise.</p>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/Web-Service/website-development">Website Development</Link></li>
            <li><Link to="/Digital-Marketing/digital-marketing">Digital Marketing</Link></li>
            <li><Link to="/SEO-Optimization/seo-optimization">SEO Optimization</Link></li>
            <li><Link to="/branding-graphic-design/branding-graphic-design">Branding & Design</Link></li>
            <li><Link to="/e-commerce-optimization/e-commerce-optimization">E-Commerce Solutions</Link></li>
            <li><Link to="/professional-training/professional-training">Professional Training</Link></li>
            <li><Link to="/lead-generation-sales/lead-generation-sales">Lead Generation And Sales</Link></li>
            <li><Link to="/in-house-studio/in-house-studio">In-House Studio</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Email: marketmindsdigitalsolutions@gmail.com</p>
          <p>Phone: +91 9997957533</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/marketmindsdigitalsolutions1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MarketMinds Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;