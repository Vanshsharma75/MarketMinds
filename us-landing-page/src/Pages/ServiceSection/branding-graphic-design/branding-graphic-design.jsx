import React from 'react';
import './branding-graphic-design.css';
import { Link } from 'react-router-dom';
import designerImg from '../../../assets/designer.png';
import developerImg from '../../../assets/developer-img.png';
import mainbackground from '../../../assets/mainbrand.png';
import circle from '../../../assets/circle 1.png';

const BrandedGraphicDesignPage = () => {
  return (
    <div className="branding-design-page">
      <section className="branding-design-hero">
        <div className="branding-hero-content">
          <h1>Branding & Graphic Design</h1>
          <p>
            Transform your brand's identity with visually stunning and cohesive graphic design solutions.
            We help you reach your target audience and achieve measurable results through comprehensive
            branding strategies.
          </p>
        </div>
      </section>
      <section className="branding-services">
        <div className="branding-hero-image">
          <h2>Our Design Process</h2>
          <img src={designerImg} alt="Designer working" />
        </div>
        <div className="branding-process-grid">
          <div className="branding-process-grid-top">
            <div className="branding-process-card">
              <div className="branding-process-content">
                <span className="branding-process-number">01</span>
                <h3>Discovery & Research</h3>
                <p>Understanding your brand, market, and objectives</p>
              </div>
            </div>
            <div className="branding-process-card">
              <div className="branding-process-content">
                <span className="branding-process-number">02</span>
                <h3>Concept Development</h3>
                <p>Creating initial design concepts and directions</p>
              </div>
            </div>
          </div>
          <div className="branding-process-grid-bottom">
            <div className="branding-process-card">
              <div className="branding-process-content">
                <span className="branding-process-number">03</span>
                <h3>Design Refinement</h3>
                <p>Iterating and perfecting the chosen design</p>
              </div>
            </div>
            <div className="branding-process-card">
              <div className="branding-process-content">
                <span className="branding-process-number">04</span>
                <h3>Testing & Launch</h3>
                <p>Thorough testing and implementation across platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="branding-process">
        <h2>Our Design Services Includes: </h2>
        <div className="branding-services-grid">
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Logo Design & Brand Identity</h3>
            <p>Create a memorable brand identity that resonates with your audience.</p>
          </div>
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Brand Style Guide Development</h3>
            <p>Establish consistent brand guidelines for cohesive visual communication.</p>
          </div>
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Packaging Design</h3>
            <p>Stand out on shelves with attractive and functional packaging designs.</p>
          </div>
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Social Media Graphics</h3>
            <p>Engage your audience with eye-catching social media visuals.</p>
          </div>
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Website & App UI/UX</h3>
            <p>Create intuitive and visually appealing digital experiences.</p>
          </div>
          <div className="branding-service-card">
            <div className="branding-service-dot"></div>
            <h3>Marketing Collateral</h3>
            <p>Develop professional marketing materials that drive results.</p>
          </div>
        </div>
      </section>
      <section className="branding-why-choose">
        <h2>Why Choose Us?</h2>
        <div className="whychoose-bottam">
          <div className="branding-benefits-grid">
            <div className="branding-benefit-card">
              <h4>Creative Solutions</h4>
              <p>Unique and innovative design approaches for your brand</p>
            </div>
            <div className="branding-benefit-card">
              <h4>Brand Strategy</h4>
              <p>Strategic thinking behind every design decision</p>
            </div>
            <div className="branding-benefit-card">
              <h4>Attention to Detail</h4>
              <p>Meticulous care in every design element</p>
            </div>
            <div className="branding-benefit-card">
              <h4>Visual Consistency</h4>
              <p>Maintaining brand coherence across all materials</p>
            </div>
          </div>
          <div className="branding-showcase-image">
            <img src={mainbackground} alt="Designer working" />
            <div className="designer-profile">
              <div className="designer-info">
                <h4>Graphic Designer</h4>
                <p>Fixing & exporting pixels.</p>
              </div>
              <img src={developerImg} alt="Graphic Designer" />
            </div>
            <div className="branding-success-badge">
              <span className="branding-check-icon">
                <img src={circle} alt="" className="branding-circle" />
              </span>
              <span>File Exported Successfully</span>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section leadgen-contact-button-container">
        <Link to="/contact" className="leadgen-contact-service-button">Contact For this Service</Link>
      </section>
    </div>
  );
};

export default BrandedGraphicDesignPage;
