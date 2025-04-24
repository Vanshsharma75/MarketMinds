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
import "./WhyChooseUs.css";
import "./ServicesPreview.css";
import "./Testimonials.css";
import "./ContactButtons.css";
import './StatsSection.css';

// Images
import heroImage from "../../../public/assets/HP Digital Service.jpg";
import webDevImg from "../../../public/assets/web-development.png";
import brandingImg from "../../../public/assets/Branding-GraphicDesign.png";
import digitalMarketingImg from "../../../public/assets/Digital-Marketing.png";
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
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
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

      {/* Why Choose Us - Updated structure */}
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

      {/* Services Preview - Updated structure */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="service-container">
          {[{
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
          }].map((service, index) => (
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
          {[{
            number: "100+",
            text: "Projects Completed",
          },
          {
            number: "50+",
            text: "Happy Clients",
          },
          {
            number: "5+",
            text: "Years Experience",
          }].map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Our Clients Love Us</h2>
        <p className="section-subtitle">See what our valued clients have to say about our services</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Working with MarketMinds Digital Solutions has been a game-changer for our brand, Sports and Beyond. 
                Their strategic approach and dedication to quality have truly transformed our digital presence."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sports & Beyond</h4>
                  <p>Brand Partner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "We at TLO Food Chain are extremely impressed with the professionalism and quality of work 
                delivered by MarketMinds. Their expertise in digital solutions has significantly improved our 
                online presence."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>TLO Momos</h4>
                  <p>Food Chain Owner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "It was a great experience taking the services from Marketminds Digital Solutions, 
                best in town! Their team's dedication and expertise made all the difference."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Shivam Sharma</h4>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Awesome experience with MarketMinds Digital Solutions! Fully satisfied with their 
                services and professional approach. Would definitely recommend their services."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Princy Singhal</h4>
                  <p>Satisfied Client</p>
                </div>
              </div>
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
