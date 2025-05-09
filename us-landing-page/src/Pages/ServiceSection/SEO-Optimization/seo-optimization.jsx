import React from 'react';
import { Link } from 'react-router-dom';
import './seo-optimization.css';
import seoImg from '../../../assets/SeoImg.png';

const SEOOptimization = () => {
  return (
    <div className="seo-service-page">
      <section className="seo-service-section">
        <div className="seo-top-title">
        <h2 className="seo-service-title">SEO Optimization</h2>
        <p className="seo-service-description">
        By leveraging AI-powered SEO tools and Google's latest algorithm updates, we help businesses achieve sustainable long-term growth.
        </p>
        </div>
        <div className="seo-marketing-services">
          <h3>Our SEO Services Include:</h3>
          <div className="seo-services-container">
            <div className="seo-services-grid">
              <div className="seo-service-item">
                <h4>On-Page SEO Optimization</h4>
                <p>Optimizing keyword research, title tags, meta descriptions, page tagging</p>
              </div>
              <div className="seo-service-item">
                <h4>Off-Page SEO Optimization</h4>
                <p>Quality backlink acquisition and authority building</p>
              </div>
              <div className="seo-service-item">
                <h4>Technical SEO Audits</h4>
                <p>Comprehensive site analysis and performance optimization</p>
              </div>
              <div className="seo-service-item">
                <h4>Local SEO Optimization</h4>
                <p>Optimizing a business's visibility in unpaid, location-based search</p>
              </div>
            </div>
            <div className="seo-services-image">
              <img
                src={seoImg}
                alt="SEO Illustration"
                className="seo-illustration"
              />
            </div>
          </div>
        </div>
        
        <div className="seo-contact-button-container">
          <Link to="/contact" className="seo-contact-service-button">
            Contact Us About This Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimization;