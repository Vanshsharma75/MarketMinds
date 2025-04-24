import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './USLanding.css';

const USLanding = () => {
  return (
    <div className="us-landing">
      <section className="hero-section">
        <h1>MarketMinds Digital Solutions – Fueling Your Brand's Digital Growth</h1>
        <h2>We Help You Save Time & Skyrocket ROI</h2>
        <p className="hero-subtitle">
          Tired of agencies that overpromise and underdeliver?
          At MarketMinds, we simplify digital growth with a performance-driven approach.
        </p>
        <button className="cta-btn">Schedule a Free Consultation</button>
      </section>

      <section className="expertise-section" id="services">
        <h2>Our Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <div className="icon">💻</div>
            <h3>Website & App Development</h3>
            <p>Custom websites and applications built for performance and user experience.</p>
          </div>
          <div className="expertise-item">
            <div className="icon">📈</div>
            <h3>Digital Marketing & Ads</h3>
            <p>Data-driven campaigns that deliver measurable results and ROI.</p>
          </div>
          <div className="expertise-item">
            <div className="icon">🛒</div>
            <h3>E-Commerce Solutions</h3>
            <p>End-to-end online store development with optimized conversion funnels.</p>
          </div>
          <div className="expertise-item">
            <div className="icon">🎨</div>
            <h3>Branding & Content Strategy</h3>
            <p>Strategic brand positioning and content that resonates with your audience.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-section" id="about">
        <h2>Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="icon">⏱️</div>
            <h3>Fast turnaround & flexible timelines</h3>
            <p>We understand the importance of time-to-market in today's competitive landscape.</p>
          </div>
          <div className="benefit-item">
            <div className="icon">💰</div>
            <h3>ROI-focused campaigns</h3>
            <p>Every dollar spent is tracked and optimized for maximum return on investment.</p>
          </div>
          <div className="benefit-item">
            <div className="icon">👨‍💼</div>
            <h3>Dedicated US account manager</h3>
            <p>Direct communication with your dedicated point of contact for seamless collaboration.</p>
          </div>
          <div className="benefit-item">
            <div className="icon">💎</div>
            <h3>Transparent pricing – no surprises</h3>
            <p>Clear pricing structure with no hidden fees or unexpected costs.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>What You Get</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon">🔧</div>
            <h3>100% custom-built solutions</h3>
            <p>Tailored specifically to your business needs and goals.</p>
          </div>
          <div className="feature-item">
            <div className="icon">📊</div>
            <h3>Weekly performance reports</h3>
            <p>Stay informed with regular updates on your project's performance metrics.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🚀</div>
            <h3>End-to-end support – Design, Deploy & Grow</h3>
            <p>Comprehensive support from initial concept to ongoing optimization.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <h2>Let's Build Something Powerful Together</h2>
        <p>Ready to transform your digital presence? Get in touch today!</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Schedule a Free Discovery Call</button>
        </div>
      </section>

      {/* Fixed Contact Buttons */}
      <div className="fixed-contact-buttons">
        <a
          href="tel:+919997957533"
          className="call-button"
          aria-label="Call MarketMinds"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/+919997957533"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default USLanding;