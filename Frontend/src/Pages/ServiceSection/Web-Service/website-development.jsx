import React from 'react';
import { Link } from 'react-router-dom';
import '../shared-service-styles.css';

const WebsiteDevelopment = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Website Development & Design</h2>
        <p className="service-description">
          Your website is your digital storefront—make it count. We design fast, 
          responsive, and SEO-optimized websites with seamless navigation, 
          stunning UI/UX, and mobile-friendly architecture.
        </p>
        <p className="service-description">
          Whether it's an ecommerce store, corporate website, or portfolio site, 
          we ensure your website not only looks great but also drives conversions.
        </p>
        
        <div className="features">
          <h3>Our Web Development Services Include:</h3>
          <ul>
            <li>Custom Website Design</li>
            <li>Responsive Mobile Development</li>
            <li>E-commerce Solutions</li>
            <li>Content Management Systems</li>
            <li>Website Maintenance</li>
            <li>Performance Optimization</li>
            <li>SEO-friendly Architecture</li>
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

export default WebsiteDevelopment;
