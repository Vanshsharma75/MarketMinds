import React from 'react';
import { Link } from 'react-router-dom';  // Add this import
import './lead-generation.css'
const LeadGenerationSales = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Lead Generation & Sales</h2>
        <p className="service-description">
          Drive business growth with our comprehensive lead generation and sales services. We help you 
          identify, attract, and convert high-quality leads using data-driven strategies 
          and proven methodologies.
        </p>
        <p className="service-description">
          Our expert team combines multiple channels and techniques to create a steady 
          stream of qualified leads and boost your sales performance.
        </p>

        <div className="features">
          <h3>Our Lead Generation & Sales Services Include:</h3>
          <ul>
            <li>Lead Magnet Creation</li>
            <li>Email Marketing Campaigns</li>
            <li>Landing Page Optimization</li>
            <li>Social Media Lead Generation</li>
            <li>Marketing Automation</li>
            <li>Lead Nurturing Strategies</li>
            <li>Sales Funnel Optimization</li>
            <li>Conversion Rate Optimization</li>
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
export default LeadGenerationSales;