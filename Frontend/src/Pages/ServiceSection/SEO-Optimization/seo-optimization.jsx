import React from 'react';
import { Link } from 'react-router-dom';
import '../shared-service-styles.css';

const SEOOptimization = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">SEO Optimization</h2>
        <p className="service-description">
          Dominate search rankings and increase organic traffic with our result-oriented SEO strategies. 
          We specialize in keyword research, on-page and off-page optimization, technical SEO audits, 
          and high-quality content creation.
        </p>
        <p className="service-description">
          By leveraging AI-powered SEO tools and Google's latest algorithm updates, we help businesses 
          achieve sustainable long-term growth.
        </p>

        <div className="features">
          <h3>Our SEO Services Include:</h3>
          <ul>
            <li>Keyword Research & Analysis</li>
            <li>On-Page SEO Optimization</li>
            <li>Technical SEO Audits</li>
            <li>Content Strategy & Creation</li>
            <li>Link Building</li>
            <li>Performance Tracking</li>
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

export default SEOOptimization;
