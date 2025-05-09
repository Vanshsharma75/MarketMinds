import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './lead-generation.css';
import leadgenImg from  '../../../../public/assets/leadgenimg.png';


const LeadGenerationSales = () => {
  return (
    <div className="leadgen-page">
      <section className="leadgen-section">
        <div className="leadtop-section">
          <h2>Lead Generation & Sales</h2>
          <p>Our expert team combines multiple channels and techniques to create a steady stream of qualified leads and boost your sales performance.</p>
        </div>
        <div className="lead-mid-section">
          <img src={leadgenImg} alt="" className="leadimg-section" />
          <p className="leadgen-description">
            Drive business growth with our comprehensive lead generation and sales services. We help you identify, attract, and convert high-quality leads using data-driven strategies and proven methodologies.
            Our expert team combines multiple channels and techniques to create a steady stream of qualified leads and boost your sales performance.
          </p>
        </div>
        <div className="leadgen-features">
          <h3>Our Lead Generation & Sales Services Include:</h3>
          <ul className="leadgen-features-list">
            <li className="leadgen-feature-item1">Lead Magnet Creation</li>
            <li className="leadgen-feature-item2">Email Marketing Campaigns</li>
            <li className="leadgen-feature-item3">Landing Page Optimization</li>
            <li className="leadgen-feature-item4">Social Media Lead Generation</li>
            <li className="leadgen-feature-item5">Marketing Automation</li>
            <li className="leadgen-feature-item6">Lead Nurturing Strategies</li>
            <li className="leadgen-feature-item7">Sales Funnel Optimization</li>
            <li className="leadgen-feature-item8">Conversion Rate Optimization</li>
          </ul>
        </div>
        
        <div className="leadgen-contact-button-container">
          <Link to="/contact" className="leadgen-contact-service-button">
            Contact Us About This Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadGenerationSales;