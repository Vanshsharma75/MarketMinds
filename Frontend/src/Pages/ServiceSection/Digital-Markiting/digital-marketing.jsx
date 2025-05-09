import React from 'react';
import { Link } from 'react-router-dom';
import './digital-markiting.css';

import expertTeamImg from '../../../../public/assets/expert.png';
import customSolutionsImg from '../../../../public/assets/costom-solutions.png';
import provenSuccessImg from '../../../../public/assets/sucess.png';
import transparentReportingImg from '../../../../public/assets/statsdata.png';
import dataDrivenImg from '../../../../public/assets/datadriven.png';

const DigitalMarketingPage = () => {
  return (
    <div className="digital-marketing-page">

      {/* Header Section */}
      <header className="digital-marketing-header">
        <div className="header-content">
          <h1>Digital Marketing Services</h1>
        </div>
        <p>
          Grow your business with our expert digital marketing solutions.
          We help you reach your target audience and achieve measurable
          results through comprehensive digital strategies.
        </p>
      </header>

      {/* Services Section */}
      <section className="marketing-services-section">
        <h2>Our Digital Marketing Services Include:</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="dot" />
            <h3>Search Engine Optimization (SEO)</h3>
            <p>Improve your search rankings and organic traffic</p>
          </div>
          <div className="service-card">
            <div className="dot" />
            <h3>Pay-Per-Click Advertising (PPC)</h3>
            <p>Targeted ads for immediate visibility and results</p>
          </div>
          <div className="service-card">
            <div className="dot" />
            <h3>Social Media Marketing</h3>
            <p>Engage audiences across social platforms</p>
          </div>
          <div className="service-card">
            <div className="dot" />
            <h3>Content Marketing</h3>
            <p>Compelling content that drives engagement</p>
          </div>
          <div className="service-card">
            <div className="dot" />
            <h3>Email Marketing</h3>
            <p>Strategic campaigns for customer retention</p>
          </div>
          <div className="service-card">
            <div className="dot" />
            <h3>Analytics & Reporting</h3>
            <p>Data-driven insights for optimization</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="top-whychoose">
          <h2>WHY CHOOSE US?</h2>
          <h3>More Than Just Posts – It's Strategy That Scales</h3>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card-expert">
            <img src={expertTeamImg} alt="Expert Team" />
            <h4>Expert Team</h4>
            <p>Years of industry experience that drive results</p>
          </div>

          <div className="benefit-card-custom">
            <h4>Custom Solutions</h4>
            <p>Tailored to your business needs</p>
            <img src={customSolutionsImg} alt="Custom Solutions" />
          </div>

          <div className="benefit-card-sucess">
            <h4>Proven Success</h4>
            <p>Track record of marketing results</p>
            <img src={provenSuccessImg} alt="Proven Success" />
          </div>

          <div className="benefit-card-transparent">
            <h4>Transparent Reporting</h4>
            <p>Clear insights into performance</p>
            <img src={transparentReportingImg} alt="Transparent Reporting" />
          </div>

          <div className="benefit-card-data-driven">
            <h4>Data Driven Strategy</h4>
            <p>Maximize ROI</p>
            <img src={dataDrivenImg} alt="Data Driven Strategy" />
          </div>
        </div>

        <div className="cta-section1">
          <Link to="/contact" className="cta-button1">
            Contact For this Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
