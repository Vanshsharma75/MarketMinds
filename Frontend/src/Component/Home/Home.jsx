import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaShieldAlt, FaHeadset, FaWhatsapp, FaPhone } from "react-icons/fa";
import "./Home.css";

// Import Images
import heroImage from "../../assets/971.jpg";
import webDevImg from "../../assets/web-development.png";
import brandingImg from "../../assets/Branding-GraphicDesign.png";
import digitalMarketingImg from "../../assets/Digital-Marketing.png";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Businesses with Digital Excellence</h1>
          <p>We provide cutting-edge IT solutions to help you grow and scale effectively.</p>
          <Link to="/servicesSection">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Digital Solutions"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400?text=Digital+Solutions";
            }}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose MarketMinds?</h2>
        <div className="features-grid">
          <div className="feature">
            <FaRocket className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick turnaround time for all projects</p>
          </div>
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <h3>Quality Assured</h3>
            <p>High-quality solutions that meet standards</p>
          </div>
          <div className="feature">
            <FaHeadset className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer assistance</p>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="service-container">
          {[
            {
              to: "/Web-Service/website-development",
              img: webDevImg,
              alt: "Web Development",
              title: "Web Development",
              desc: "Creating stunning and high-performing websites.",
            },
            {
              to: "/branding-graphic-design/branding-graphic-design",
              img: brandingImg,
              alt: "Branding & Graphic Design",
              title: "Branding & Graphic Design",
              desc: "Creating unique logos and marketing materials.",
            },
            {
              to: "/Digital-Markiting/digital-marketing",
              img: digitalMarketingImg,
              alt: "Digital Marketing",
              title: "Digital Marketing",
              desc: "Boost your brand's visibility with SEO & advertising.",
            },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="service-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
                <Link to={service.to} className="service-title-link">
                  <h3>{service.title}</h3>
                </Link>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/servicesSection" className="view-more">
          <span>View All Services →</span>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { number: "100+", text: "Projects Completed" },
            { number: "50+", text: "Happy Clients" },
            { number: "5+", text: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's create something amazing together!</p>
        <Link to="/contact">
          <button className="cta-button">Contact Us Now</button>
        </Link>
      </section>

      <div className="fixed-contact-buttons">
        <a href="tel:+919997957533" className="call-button">
          <FaPhone className="fa-phone" />
        </a>
        <a href="https://wa.me/+919997957533" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Home;
