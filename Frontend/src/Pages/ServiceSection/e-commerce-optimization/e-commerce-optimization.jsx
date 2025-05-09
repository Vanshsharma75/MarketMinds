import React from 'react';
import './e-commerce-optimization.css';
import { Link } from 'react-router-dom';
import eCommImg from '../../../../public/assets/e-commerceimg.png';

const ECommerceDevelopment = () => {
  return (
    <div className="ecommerce-page">
      <section className="ecommerce-hero">
        <div className="hero-text">
          <h1>E-Commerce Development</h1>
          <p>
            From small businesses to large enterprises, our custom e-commerce solutions 
            ensure a smooth user experience, mobile responsiveness, and 
            high conversion rates.
          </p>
        </div>
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <div className="image-container">
                <img src={eCommImg} alt="E-commerce Development" />
              </div>
              <div className="about-badge">
                <span>About E-Commerce Development</span>
              </div>
            </div>
            <div className="hero-description">
              <p>Launch a powerful and scalable e-commerce platform with our expert development services. We build feature-rich online stores with seamless checkout, secure payment gateways, and optimized performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-services">
        <h2>Our E-Commerce Services Include:</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Custom E-commerce Development</h3>
              <p>Tailored solutions for your unique business needs</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Secure Payment Integration</h3>
              <p>Multiple payment gateways with robust security</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Inventory Management Systems</h3>
              <p>Efficient stock tracking and management tools</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Mobile Commerce Solutions</h3>
              <p>Optimized mobile shopping experience</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Performance Optimization</h3>
              <p>Fast loading and smooth user experience</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-content">
              <div className="card-dot"></div>
              <h3>Analytics Integration</h3>
              <p>Data-driven insights for business growth</p>
            </div>
          </div>
        </div>
      </section>

      <div className="leadgen-contact-button-container">
        <Link to="/contact" className="leadgen-contact-service-button">
          Contact Us About This Service
        </Link>
      </div>
    </div>
  );
};

export default ECommerceDevelopment;
