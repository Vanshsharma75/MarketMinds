import React from 'react';
import { Link } from 'react-router-dom';
import './digital-markiting.css';

const DigitalMarketingPage = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Digital Marketing Services</h2>
        <p className="service-description">
          Grow your business with our expert digital marketing solutions. We help you reach
          your target audience and achieve measurable results through comprehensive digital strategies.
        </p>

        <div className="marketing-services">
          <h3>Our Digital Marketing Services Include:</h3>
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Search Engine Optimization (SEO)</h4>
                <p>Improve your search rankings and organic traffic</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Pay-Per-Click Advertising (PPC)</h4>
                <p>Targeted ads for immediate visibility and results</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Social Media Marketing</h4>
                <p>Engage audiences across social platforms</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Content Marketing</h4>
                <p>Compelling content that drives engagement</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Email Marketing</h4>
                <p>Strategic campaigns for customer retention</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Analytics & Reporting</h4>
                <p>Data-driven insights for optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="marketing-benefits">
          <h3>Why Choose Us?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Proven Success</h4>
              <p>Track record of delivering results</p>
            </div>
            <div className="benefit-item">
              <h4>Data-Driven Strategy</h4>
              <p>Maximize ROI through analytics</p>
            </div>
            <div className="benefit-item">
              <h4>Custom Solutions</h4>
              <p>Tailored to your business needs</p>
            </div>
            <div className="benefit-item">
              <h4>Expert Team</h4>
              <p>Years of industry experience</p>
            </div>
            <div className="benefit-item">
              <h4>Transparent Reporting</h4>
              <p>Clear insights into performance</p>
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

export default DigitalMarketingPage;