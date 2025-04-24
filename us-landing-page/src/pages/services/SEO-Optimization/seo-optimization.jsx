import React from 'react';
import { Link } from 'react-router-dom';
import './seo-optimization.css';

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

        <div className="marketing-services">
          <h3>Our SEO Services Include:</h3>
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Keyword Research & Analysis</h4>
                <p>Strategic keyword targeting and competitive analysis</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>On-Page SEO Optimization</h4>
                <p>Optimizing content, meta tags, and site structure</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Technical SEO Audits</h4>
                <p>Comprehensive site analysis and performance optimization</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Content Strategy & Creation</h4>
                <p>SEO-driven content planning and development</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Link Building</h4>
                <p>Quality backlink acquisition and authority building</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <div className="service-content">
                <h4>Performance Tracking</h4>
                <p>Regular monitoring and optimization of SEO results</p>
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

export default SEOOptimization;
