import React from "react";
import { Link } from "react-router-dom";
import "./ServiceSection.css";
import webDevelopment from "../../assets/web-development.png";
import digitalMarketing from "../../assets/Digital-Marketing.png";
import seoOptimization from "../../assets/SEO1.png";
import brandingGraphicDesign from "../../assets/Branding-GraphicDesign.png";
import eCommerce from "../../assets/E-commerce.png";
import professionalTraining from "../../assets/Proffetional-training.png";

// ServiceCard Component
const ServiceCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <img src={imageUrl} alt={title} className="service-image" />
        <h3>
          {link ? (
            <Link to={link} className="service-title-link">{title}</Link>
          ) : (
            <span>{title}</span> // If no link, display title as text
          )}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// ServicesSection Component
const ServicesSection = () => {
  const services = [
    { title: "Website Development", description: "We build modern, responsive websites for businesses.", imageUrl: webDevelopment, link: "/Web-Service/website-development" },
    { title: "Digital Marketing", description: "SEO, PPC, and social media strategies.", imageUrl: digitalMarketing, link: "/Digital-Marketing/digital-marketing" },
    { title: "SEO Optimization", description: "Enhancing search rankings to boost traffic.", imageUrl: seoOptimization, link: "/SEO-Optimization/seo-optimization" },
    { title: "Branding & Graphic Design", description: "Creating logos and marketing materials.", imageUrl: brandingGraphicDesign, link: "/branding-graphic-design/branding-graphic-design" },
    { title: "E-commerce Optimization", description: "Custom online stores with seamless UX.", imageUrl: eCommerce, link: "/e-commerce-optimization/e-commerce-optimization" },
    { title: "Professional Training", description: "Hands-on training in web development.", imageUrl: professionalTraining, link: "/professional-training/professional-training" }
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
