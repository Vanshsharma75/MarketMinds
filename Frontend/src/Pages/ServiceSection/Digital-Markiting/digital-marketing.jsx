import React from 'react';
import '../shared-service-styles.css';
import { Link } from 'react-router-dom';

const DigitalMarketingPage = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Digital Marketing Services</h2>
        <p className="service-description">
          Grow your business with our expert digital marketing solutions. We help you reach
          your target audience and achieve measurable results through comprehensive digital strategies.
        </p>

        <div className="features">
          <h3>Our Digital Marketing Services Include:</h3>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Pay-Per-Click Advertising (PPC)</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        <div className="features">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Proven track record of success</li>
            <li>Data-driven strategies for maximum ROI</li>
            <li>Custom solutions tailored to your needs</li>
            <li>Expert team with years of experience</li>
            <li>Transparent reporting and analytics</li>
          </ul>
        </div>
        <div className="contact-button-container">
          <Link to="/contact" className="contact-service-button">
            Contact Us About This Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;