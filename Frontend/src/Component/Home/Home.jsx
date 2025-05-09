import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import "./Home.css";
import ImageSlider from './components/ImageSlider';
import ServicePreview from './components/servicePreviw';
import "./WhyChooseUs.css";
import "./ServicesPreview.css";
import "./Testimonials.css";
import "./ContactButtons.css";
import './StatsSection.css';
import Testimonials from './components/testrimonials';
import whyChooseUsImage from "../../../public/assets/why-choose-us.png";

// Images
import heroImage from "../../../public/assets/mainimage.png";
// Update image imports with correct paths
import slide1 from "../../../public/assets/8.jpg";
import slide2 from "../../../public/assets/3.jpg";
import slide3 from "../../../public/assets/1.jpg";
import slide4 from "../../../public/assets/2.jpg";
import slide5 from "../../../public/assets/4.jpg";
import slide6 from "../../../public/assets/5.jpg";
import slide7 from "../../../public/assets/6.jpg";
import slide8 from "../../../public/assets/7.jpg";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const indicator = document.querySelector('.service-indicator');
    const activeItem = document.querySelector('.service-item.active');
    if (indicator && activeItem) {
      indicator.style.transform = `translateY(${activeItem.offsetTop}px)`;
    }
  }, [activeService]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <div className="home">
      <ImageSlider 
        slides={slides}
        currentSlide={currentSlide}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        setCurrentSlide={setCurrentSlide}
      />
      
{/* Hero Section - Updated structure */}
<section className="hero">
  <div className="hero-wrapper">
    <div className="hero-image">
      <img src={heroImage} alt="Empowering Businesses with Digital Solutions" />
    </div>
    <div className="hero-content">
      <h1>
        Empowering <span className="highlight-text">Businesses</span> With
        <br />
        <span className="highlight-text">Digital Excellence</span>
      </h1>
      <p>
        We provide cutting-edge IT solutions to help you grow and scale effectively.
      </p>
      <Link to="/servicesSection" className="cta-button">
        Get Started Today
      </Link>
    </div>
  </div>
</section>
      {/* Services Preview Section */}
      <ServicePreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us - Updated structure */}
      <section className="why-choose-us">
        <div className="why-choose-us-container">
          <div className="why-choose-us-left">
            <h2>WHY CHOOSE US?</h2>
            <p className="subtitle">At MarketMinds We Are Dedicated To Providing Unparalleled Service, Expert Solutions And A Seamless Experience For All Your Marketing Needs. Here's Why You Should Choose Us</p>
            <div className="why-choose-us-image">
              <img src={whyChooseUsImage} alt="Why Choose Us Illustration" />
            </div>
          </div>
          <div className="why-choose-us-right">
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <div className="feature-text">
                  <h3>Fast Delivery</h3>
                  <p>Quick turnaround time for all projects</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <div className="feature-text">
                  <h3>Quality Assured</h3>
                  <p>High-quality solutions that meet standards</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaHeadset />
                </div>
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                  <p>Round-the-clock customer assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>SATISFIED CLIENTS</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
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

export default Home;
