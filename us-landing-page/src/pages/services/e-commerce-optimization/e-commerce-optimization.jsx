import React from 'react';
import './e-commerce-optimization.css';
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

        <div className="ecommerce-services">
          <h3>Our E-Commerce Services Include:</h3>
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Custom E-commerce Development</h4>
                <p>Tailored solutions for your unique business needs</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Secure Payment Integration</h4>
                <p>Multiple payment gateways with robust security</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Inventory Management Systems</h4>
                <p>Efficient stock tracking and management tools</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Mobile Commerce Solutions</h4>
                <p>Optimized mobile shopping experience</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Performance Optimization</h4>
                <p>Fast loading and smooth user experience</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Analytics Integration</h4>
                <p>Data-driven insights for business growth</p>
              </div>
            </div>
          </div>
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
