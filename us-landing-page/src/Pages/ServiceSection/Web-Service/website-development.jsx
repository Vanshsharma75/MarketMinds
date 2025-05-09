import React from 'react';
import { Link } from 'react-router-dom';
import './website-development.css';
import responsiveDesign from '../../../assets/responsiveDesign.jpg'; // Replace with your image path
import developerImage from '../../../assets/webdev-png.png'; // Replace with your image path
import bugIcon from '../../../assets/circle 1.png'; // Replace with your icon path
import developer from '../../../assets/developer-img.png'; // Replace with your image path
import plan from '../../../assets/plan.png';
import mordenTec from '../../../assets/morden-tecnology.png';
import prototype from '../../../assets/prototyping.png';
import development from '../../../assets/development.png';
import coma from '../../../assets/coma.png';

const WebsiteDevelopmentTop = () => {
  return (
    <>
    <div className="webdev-top-section-container">
    <div className="webdev-top-section">
      <div className="web-devheading">
        <h1>Website Development & design</h1>
      </div>
      <div className="web-devSubtitle">
        <p>Whether it's an ecommerce store, corporate website, or portfolio site, we
          ensure your website not only looks great but also drives conversions.</p>
      </div>
    </div>
    <div className="webdev-topMid-section">
    <div className="Webbackimage">
        <img src={developerImage} alt="Developer" className="webdev-developer-image" />
      <div className="webdev-profile-section">
        <img src={developer} alt="Developer" className="webdev-profile-pic" />
        <span className="webdev-profile-name"><b>Front Developer & Backend Developer</b><br/>Polishing and pushin code </span>
        <p></p>
      </div>
      {/* bug section add  */}
      <div className="webdev-bug-icon">
        <img src={bugIcon} alt="Bug Icon" className="webdev-bug-icon-image" />
        <p>Bug Fixed Sucessfully</p>
      </div>
    </div>
      <div className="webdev-highlight-message">
        <h3 className='Web-headingh3'><img src={coma} className="coma" alt="Quotation mark" />About Website Design</h3>
        <p>Your website is your digital storefront—make it count. We design fast, responsive, 
        and SEO-optimized websites with seamless navigation, stunning UI/UX, and 
        mobile-friendly architecture.</p>
      </div>
      <div className="webdev-projectbutton">
        <button className='webdev-button-pro'>See our Projects</button>
      </div>
    </div> 
    </div>
    <div className="webdev-feature-highlights">
       <div className="webdev-feature-card">
       <div>
           <h3>Responsive Design</h3>
           <p>Our websites adapt seamlessly to all devices - from desktop to mobile, ensuring your visitors have a perfect experience everywhere.</p>
        </div>
           <img src={responsiveDesign} alt="Responsive Design" />         
         </div>
          
         <div className="webdev-feature-card">
          <div>
           <h3>Modern Technology Stack</h3>
           <p>We use cutting-edge technologies like React, Node.js, and Next.js to build fast, scalable, and secure websites.</p>
          </div>
           <img src={mordenTec} alt="Modern Technology Stack" />
         </div>
    </div>
  </>
  );
};

const WebsiteDevelopment = () => {
  return (
    <div className="webdev-service-page">
      <WebsiteDevelopmentTop />
      <section className="webdev-service-section">
        <div className="webdev-services">
          <h3>Our Web Development Services Include:</h3>
          <div className="webdev-services-grid">
            <div className="webdev-service-item responsive-mobile">
              Responsive Mobile Development
            </div>
            <div className="webdev-service-item content-management">
              Content Management Systems
            </div>
            <div className="webdev-service-item performance-opt">
              Performance Optimization
            </div>
            <div className="webdev-service-item custom-design">
              Custom Website Design
            </div>
            <div className="webdev-service-item website-maintenance">
              Website Maintenance
            </div>
            <div className="webdev-service-item ecommerce">
              E-commerce Solutions
            </div>
            <div className="webdev-service-item seo-architecture">
              SEO-friendly Architecture
            </div>
          </div>
        </div>

        <div className="webdev-development-process">
          <h3>Our Development Process</h3>
          <div className="webdev-process-grid">
            <div className="webdev-process-card">
              <span className="webdev-step-number">01</span>
              <div className="webdev-process-content">
                <h4 className="webdev-process-title">DISCOVERY & PLANNING</h4>
                <p className="webdev-process-desc">Understanding your goals, target audience, and requirements. Planning out how we can support.</p>
              </div>
              <img src={plan} alt="Planning" className="webdev-process-icon" />
            </div>

            <div className="webdev-process-card">
              <span className="webdev-step-number">02</span>
              <div className="webdev-process-content">
                <h4 className="webdev-process-title">DESIGN & PROTOTYPING</h4>
                <p className="webdev-process-desc">Ideating brainstorming and designing to creating wireframes and interactive prototypes</p>
              </div>
              <img src={prototype} alt="Prototyping" className="webdev-process-icon" />
            </div>

            <div className="webdev-process-card">
              <span className="webdev-step-number">03</span>
              <div className="webdev-process-content">
                <h4 className="webdev-process-title">DEVELOPMENT</h4>
                <p className="webdev-process-desc">Building your website with clean, efficient code</p>
              </div>
              <img src={development} alt="Development" className="webdev-process-icon" />
            </div>

            <div className="webdev-process-card">
              <span className="webdev-step-number">04</span>
              <div className="webdev-process-content">
                <h4 className="webdev-process-title">TESTING & LAUNCH</h4>
                <p className="webdev-process-desc">Thorough rigorous testing we ensure everything works perfect and successful deployment</p>
              </div>
              <img src={development} alt="Testing" className="webdev-process-icon" />
            </div>
          </div>
        </div>

        {/* <section className="webdev-projects-section">
          <h3 className="projects-title">Our Recent Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <img src={responsiveDesign} alt="Responsive Design Project" className="project-image" />
              <h4 className="project-title">Responsive Design</h4>
              <p className="project-description">A fully responsive website for a retail business.</p>
            </div>
            <div className="project-card">
              <img src={mordenTec} alt="Modern Tech Project" className="project-image" />
              <h4 className="project-title">Modern Technology</h4>
              <p className="project-description">A modern e-commerce platform with advanced features.</p>
            </div>
            <div className="project-card">
              <img src={prototype} alt="Prototyping Project" className="project-image" />
              <h4 className="project-title">Prototyping</h4>
              <p className="project-description">Interactive prototypes for a startup's website.</p>
            </div>
          </div>
        </section> */}
        
        <div className="webdev-contact-button-container">
          <Link to="/contact" className="webdev-contact-service-button">
            Contact Us About This Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
