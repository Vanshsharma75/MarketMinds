import React from 'react';
import '../shared-service-styles.css';
import { Link } from 'react-router-dom';

const ECommerceDevelopment = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">E-Commerce Development</h2>
        <p className="service-description">
          Launch a powerful and scalable e-commerce platform with our expert development services. 
          We build feature-rich online stores with seamless checkout, secure payment gateways, 
          and optimized performance.
        </p>
        <p className="service-description">
          From small businesses to large enterprises, our custom e-commerce solutions 
          ensure a smooth user experience, mobile responsiveness, and high conversion rates.
        </p>

        <div className="features">
          <h3>Our E-Commerce Services Include:</h3>
          <ul>
            <li>Custom E-commerce Development</li>
            <li>Secure Payment Integration</li>
            <li>Inventory Management Systems</li>
            <li>Mobile Commerce Solutions</li>
            <li>Performance Optimization</li>
            <li>Analytics Integration</li>
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

export default ECommerceDevelopment;
