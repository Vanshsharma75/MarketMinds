import React from 'react';
import '../shared-service-styles.css';
import './professional-Training.css';
import { Link } from 'react-router-dom';

const ProfessionalTraining = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Professional Training</h2>
        <p className="service-description">
          Elevate your career with our comprehensive professional training programs. We offer 
          specialized courses in Web Development, Digital Marketing, and UI/UX Design, 
          taught by industry experts with hands-on experience.
        </p>
        <p className="service-description">
          Our practical, project-based approach ensures you gain real-world skills that are 
          immediately applicable in today's digital landscape.
        </p>

        <div className="features">
          <h3>Our Training Programs Include:</h3>
          <ul>
            <li>Web Development
              <ul>
                <li>Frontend Development (HTML, CSS, JavaScript)</li>
                <li>React.js Development</li>
                <li>Backend Technologies</li>
                <li>Full Stack Development</li>
              </ul>
            </li>
            <li>Digital Marketing
              <ul>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Advertising</li>
                <li>Content Marketing Strategy</li>
              </ul>
            </li>
            <li>UI/UX Design
              <ul>
                <li>User Interface Design Principles</li>
                <li>User Experience Best Practices</li>
                <li>Wireframing and Prototyping</li>
                <li>Design Tools (Figma, Adobe XD)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="training-benefits">
          <h3>What You'll Get:</h3>
          <ul>
            <li>Hands-on Project Experience</li>
            <li>Industry-Standard Tools Training</li>
            <li>Real-world Case Studies</li>
            <li>Portfolio Development Support</li>
            <li>Job Placement Assistance</li>
            <li>Post-Training Support</li>
          </ul>
        </div>

        <div className="training-methodology">
          <h3>Our Training Methodology:</h3>
          <ul>
            <li>Interactive Live Sessions</li>
            <li>Practical Assignments</li>
            <li>One-on-One Mentoring</li>
            <li>Industry Expert Sessions</li>
            <li>Project-Based Learning</li>
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
