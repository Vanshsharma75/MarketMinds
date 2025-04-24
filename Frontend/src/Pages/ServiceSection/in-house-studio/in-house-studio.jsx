import React from 'react';
import { Link } from 'react-router-dom';
import './in-house-studio.css';

const InHouseStudio = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Professional Photography & Videography Studio</h2>
        <p className="service-description">
          Transform your brand's visual identity with our state-of-the-art in-house studio services. 
          We combine professional photography and videography expertise to create compelling visual 
          content that elevates your brand, products, and services to new heights.
        </p>
        <p className="service-description">
          Our cutting-edge equipment, experienced creative team, and purpose-built studio space 
          ensure every project exceeds industry standards and your expectations.
        </p>

        <div className="studio-services">
          <div className="photography-section">
            <h3 className="service-subtitle">Professional Photography Services</h3>
            <ul className="services-list">
              <li>
                <h4>Product Photography</h4>
                <p>High-quality product shots with perfect lighting and composition</p>
              </li>
              <li>
                <h4>Corporate Portraits</h4>
                <p>Professional headshots and team photos for business profiles</p>
              </li>
              <li>
                <h4>Brand Story Photography</h4>
                <p>Lifestyle and narrative shots that tell your brand's unique story</p>
              </li>
              <li>
                <h4>E-commerce Photography</h4>
                <p>Optimized product images for online stores with multiple angles</p>
              </li>
              <li>
                <h4>360° Product Views</h4>
                <p>Interactive product photography for immersive viewing experience</p>
              </li>
              <li>
                <h4>Event Photography</h4>
                <p>Comprehensive coverage of corporate events and launches</p>
              </li>
            </ul>
          </div>

          <div className="videography-section">
            <h3 className="service-subtitle">Professional Videography Services</h3>
            <ul className="services-list">
              <li>
                <h4>Product Videos</h4>
                <p>Dynamic product demonstrations and feature highlights</p>
              </li>
              <li>
                <h4>Corporate Videos</h4>
                <p>Professional company profiles and promotional content</p>
              </li>
              <li>
                <h4>Brand Story Films</h4>
                <p>Cinematic storytelling that captures your brand's essence</p>
              </li>
              <li>
                <h4>Social Media Content</h4>
                <p>Engaging short-form videos optimized for social platforms</p>
              </li>
              <li>
                <h4>Event Coverage</h4>
                <p>Professional filming of corporate events and conferences</p>
              </li>
              <li>
                <h4>Aerial Videography</h4>
                <p>Stunning drone footage for unique perspectives</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="studio-features">
          <h3 className="service-subtitle">Studio Capabilities</h3>
          <ul className="features-list">
            <li>Professional Lighting Equipment</li>
            <li>Multiple Shooting Areas</li>
            <li>Green Screen Facility</li>
            <li>4K Video Recording</li>
            <li>Professional Audio Recording</li>
            <li>Post-Production Suite</li>
          </ul>
        </div>
        
        <div className="contact-button-container">
          <Link to="/contact" className="contact-service-button">
            Schedule a Studio Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InHouseStudio;