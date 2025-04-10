import React from 'react';
import '../shared-service-styles.css';
import { Link } from 'react-router-dom';

const BrandedGraphicDesignPage = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Branded Graphic Design Services</h2>
        <p className="service-description">
          Transform your brand's identity with visually stunning and cohesive graphic design solutions.
          We specialize in creating compelling designs that communicate your brand's personality and values.
        </p>

        <div className="features">
          <h3>Our Design Services Include:</h3>
          <ul>
            <li>Logo Design & Brand Identity</li>
            <li>Brand Style Guide Development</li>
            <li>Packaging Design Solutions</li>
            <li>Social Media Graphics</li>
            <li>Website & App UI/UX Design</li>
            <li>Marketing Collateral Design</li>
          </ul>
        </div>

        <div className="features">
          <h3>Our Design Process:</h3>
          <ul>
            <li>Discovery & Brand Research</li>
            <li>Concept Development</li>
            <li>Design Refinement</li>
            <li>Final Implementation</li>
          </ul>
        </div>

        <div className="features">
          <h3>Why Choose Us:</h3>
          <ul>
            <li>Creative and Unique Design Solutions</li>
            <li>Deep Understanding of Brand Strategy</li>
            <li>Attention to Detail in Every Design</li>
            <li>Consistent Visual Brand Identity</li>
            <li>Collaborative Client Approach</li>
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

export default BrandedGraphicDesignPage;
