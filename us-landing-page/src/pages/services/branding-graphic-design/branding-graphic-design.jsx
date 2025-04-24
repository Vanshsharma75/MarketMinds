import React from 'react';
import './branding-graphic-design.css'; // Fix the CSS import name
import { Link } from 'react-router-dom';

const BrandedGraphicDesignPage = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Branding & Graphic Design</h2>
        <p className="service-description">
          Transform your brand's identity with visually stunning and cohesive graphic design solutions.
          We specialize in creating compelling designs that communicate your brand's personality and values.
        </p>

        <div className="design-services">
          <h3>Our Design Services Include:</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Logo Design & Brand Identity</h4>
              <p>Create a memorable brand identity that resonates with your audience.</p>
            </div>
            <div className="service-card">
              <h4>Brand Style Guide Development</h4>
              <p>Establish consistent brand guidelines for cohesive visual communication.</p>
            </div>
            <div className="service-card">
              <h4>Packaging Design Solutions</h4>
              <p>Stand out on shelves with attractive and functional packaging designs.</p>
            </div>
            <div className="service-card">
              <h4>Social Media Graphics</h4>
              <p>Engage your audience with eye-catching social media visuals.</p>
            </div>
            <div className="service-card">
              <h4>Website & App UI/UX Design</h4>
              <p>Create intuitive and visually appealing digital experiences.</p>
            </div>
            <div className="service-card">
              <h4>Marketing Collateral Design</h4>
              <p>Develop professional marketing materials that drive results.</p>
            </div>
          </div>
        </div>

        <div className="design-process">
          <h3>Our Design Process</h3>
          <div className="process-steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Discovery & Research</h4>
              <p>Understanding your brand, market, and objectives</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Concept Development</h4>
              <p>Creating initial design concepts and directions</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Design Refinement</h4>
              <p>Iterating and perfecting the chosen design</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Final Implementation</h4>
              <p>Delivering polished designs across all platforms</p>
            </div>
          </div>
        </div>

        <div className="design-services">
          <h3>Why Choose Us</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Creative Solutions</h4>
              <p>Unique and innovative design approaches for your brand</p>
            </div>
            <div className="service-card">
              <h4>Brand Strategy</h4>
              <p>Strategic thinking behind every design decision</p>
            </div>
            <div className="service-card">
              <h4>Attention to Detail</h4>
              <p>Meticulous care in every design element</p>
            </div>
            <div className="service-card">
              <h4>Visual Consistency</h4>
              <p>Maintaining brand coherence across all materials</p>
            </div>
            <div className="service-card">
              <h4>Client Collaboration</h4>
              <p>Working closely with you throughout the process</p>
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

export default BrandedGraphicDesignPage;
