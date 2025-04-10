import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Introduction */}
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">Empowering Businesses Through Digital Innovation</p>
        <p className="about-description">
          Founded in 2025, <strong>MarketMinds Digital Solutions</strong> is a leading digital agency specializing in 
          <span> website development, digital marketing, SEO, branding, and IT solutions.</span> Our expertise helps 
          businesses transform their online presence, improve customer engagement, and achieve sustainable growth. 
          We don't just build websites; we craft digital experiences that leave a lasting impact.
        </p>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To revolutionize the digital landscape by delivering innovative, scalable, and efficient solutions 
              that drive success for businesses of all sizes.
            </p>
          </div>
          <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              To become the most trusted digital partner worldwide, enabling brands to achieve their 
              highest potential through technology and creativity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-container">
          <div className="value-box">
            <h3>Innovation</h3>
            <p>We embrace new technologies and constantly innovate to create cutting-edge solutions.</p>
          </div>
          <div className="value-box">
            <h3>Integrity & Transparency</h3>
            <p>We believe in transparency, honesty, and ethical business practices.</p>
          </div>
          <div className="value-box">
            <h3>Collaboration & Teamwork</h3>
            <p>We foster a culture of collaboration, ensuring collective success.</p>
          </div>
          <div className="value-box">
            <h3>Quality & Excellence</h3>
            <p>We strive for perfection, ensuring top-notch quality and service.</p>
          </div>
          <div className="value-box">
            <h3>Result-Driven Performance</h3>
            <p>We focus on measurable results that drive business growth.</p>
          </div>
          <div className="value-box">
            <h3>Client-Centric Approach</h3>
            <p>Our clients' success is our priority, and we tailor solutions to meet their unique needs.</p>
          </div>
          <div className="value-box">
            <h3>Leadership</h3>
            <p>We inspire and lead the digital transformation journey.</p>
          </div>
        </div>

        {/* Company Statistics */}
        <h2 className="section-title">Our Achievements</h2>
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-number">300+ </span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">150+ </span>
            <span className="stat-label">Satisfied Clients</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">80K+ </span>
            <span className="stat-label">Website Visitors Monthly</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">10+ </span>
            <span className="stat-label">Years of Combined Experience</span>
          </div>
        </div>

        {/* Timeline / Journey */}
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">2025</span>
            <p>MarketMinds Digital Solutions was founded with a vision to bridge the gap between technology and businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
