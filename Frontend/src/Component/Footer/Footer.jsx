import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../../public/assets/logo1.png';
import msmeLogo from "../../../public/assets/msme.png";

const Footer = () => {
  return (
    <footer className="mm-footer">
      <div className="mm-footer__container">
        {/* About Us */}
        <div className="mm-footer__section mm-footer__about">
          <h3 className="mm-footer__heading">About Us</h3>
          <p className="mm-footer__text">
            MarketMinds Digital Solutions empowers businesses with impactful digital services, combining innovation, technology, and strategic growth expertise.
          </p>
        </div>

        {/* Services */}
        <div className="mm-footer__section mm-footer__services">
          <h3 className="mm-footer__heading">Our Services</h3>
          <ul className="mm-footer__list">
            {[
              ["Website Development", "/Web-Service/website-development"],
              ["Digital Marketing", "/Digital-Marketing/digital-marketing"],
              ["SEO Optimization", "/SEO-Optimization/seo-optimization"],
              ["Branding & Design", "/branding-graphic-design/branding-graphic-design"],
              ["E-Commerce Solutions", "/e-commerce-optimization/e-commerce-optimization"],
              ["Professional Training", "/professional-training/professional-training"],
              ["Lead Generation & Sales", "/lead-generation-sales/lead-generation-sales"],
              ["In-House Studio", "/in-house-studio/in-house-studio"]
            ].map(([name, path], i) => (
              <li key={i} className="mm-footer__item">
                <Link className="mm-footer__link" to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mm-footer__section mm-footer__quick-links">
          <h3 className="mm-footer__heading">Quick Links</h3>
          <ul className="mm-footer__list">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/servicesSection"],
              ["Contact Us", "/contact"],
              ["Blog", "/blog"]
            ].map(([name, path], i) => (
              <li key={i} className="mm-footer__item">
                <Link className="mm-footer__link" to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Logo */}
        <div className="mm-footer__section mm-footer__contact">
          <div className="mm-footer__logo-section">
            <img src={logo} alt="MarketMinds Logo" className="mm-footer__logo" />
            <h2 className="mm-footer__company-name">
              MARKETMINDS<br />
              <span className="mm-footer__company-tagline">DIGITAL SOLUTIONS</span>
            </h2>
          </div>
          <div className="mm-footer__contact-info">
            
            <p className="mm-footer__contact-text"><spam>📧 </spam> marketmindsdigitalsolutions@gmail.com</p>
            <p className="mm-footer__contact-text">📞+91 9997957533</p>
          </div>
          <div className="mm-footer__social-media">
            <a href="https://www.facebook.com/profile.php?id=61575161181120" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon1" />
            </a>
            <a href="https://www.instagram.com/marketmindsdigitalsolutions1/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon1" />
            </a>
            <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon1" />
            </a>
          </div>
          <div className="mm-footer__accreditation">
            <p className="mm-footer__accreditation-text">Accredited By</p>
            <img src={msmeLogo} alt="MSME Logo" className="mm-footer__msme-logo" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mm-footer__bottom">
        <p className="mm-footer__copyright">
          © 2025 <strong>MarketMinds Digital Solutions</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
