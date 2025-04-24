import React from 'react';
import { Link } from 'react-router-dom';
import '../shared-service-styles.css';
import './website-development.css';
import webDesignProcess from '../../../../public/assets/webDesignProcess.png';
import responsiveDesign from '../../../../public/assets/responsiveDesign.jpg';
import techStack from '../../../../public/assets/techStack.png';

const WebsiteDevelopment = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <h2 className="service-title">Website Development & Design</h2>
        <div className="web-service-hero">
          <img src={webDesignProcess} alt="Web Design Process" className="hero-image" />
        </div>
        
        <p className="service-description">
          Your website is your digital storefront—make it count. We design fast, 
          responsive, and SEO-optimized websites with seamless navigation, 
          stunning UI/UX, and mobile-friendly architecture.
        </p>
        <p className="service-description">
          Whether it's an ecommerce store, corporate website, or portfolio site, 
          we ensure your website not only looks great but also drives conversions.
        </p>

        <div className="web-highlights">
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={responsiveDesign} alt="Responsive Design" className="highlight-image" />
            </div>
            <div className="highlight-content">
              <h3>Responsive Design</h3>
              <p>Our websites adapt seamlessly to all devices - from desktop to mobile, ensuring your visitors have a perfect experience everywhere.</p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={techStack} alt="Technology Stack" className="highlight-image" />
            </div>
            <div className="highlight-content">
              <h3>Modern Technology Stack</h3>
              <p>We use cutting-edge technologies like React, Node.js, and Next.js to build fast, scalable, and secure websites.</p>
            </div>
          </div>
        </div>
        
        <div className="web-services">
          <h3>Our Web Development Services Include:</h3>
          <div className="services-grid">
            {['Custom Website Design', 'Responsive Mobile Development', 'E-commerce Solutions', 
              'Content Management Systems', 'Website Maintenance', 'Performance Optimization', 
              'SEO-friendly Architecture'].map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">→</span>
                <h4>{service}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="development-process">
          <h3>Our Development Process</h3>
          <div className="process-steps">
            {[
              { number: 1, title: 'Discovery & Planning', desc: 'Understanding your goals, target audience, and requirements' },
              { number: 2, title: 'Design & Prototyping', desc: 'Creating wireframes and interactive prototypes' },
              { number: 3, title: 'Development', desc: 'Building your website with clean, efficient code' },
              { number: 4, title: 'Testing & Launch', desc: 'Thorough testing and successful deployment' }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <span className="step-number">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
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

export default WebsiteDevelopment;
