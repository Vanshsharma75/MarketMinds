import React from 'react';
import '../shared-service-styles.css';
import { Link } from 'react-router-dom';

const ProfessionalTraining = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Professional Training</h2>
        <p className="service-description">
          Empower your workforce with industry-leading training programs. Our professional 
          training sessions cover digital marketing, software development, business strategy, 
          and leadership skills.
        </p>
        <p className="service-description">
          Designed by experts, our interactive workshops and hands-on learning approach 
          ensure employees and individuals gain practical skills to excel in their careers.
        </p>

        <div className="features">
          <h3>Our Training Programs Include:</h3>
          <ul>
            <li>Digital Marketing Fundamentals</li>
            <li>Web Development Bootcamps</li>
            <li>SEO & Content Strategy</li>
            <li>Business Leadership</li>
            <li>Project Management</li>
            <li>Custom Corporate Training</li>
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

export default ProfessionalTraining;
