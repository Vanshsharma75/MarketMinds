import React from "react";
import { Link } from "react-router-dom";
import "./ServiceSection.css";
import webDevelopment from "../../../public/assets/web-development.png";
import digitalMarketing from "../../../public/assets/Digital-Marketing.png";
import seoOptimization from "../../../public/assets/SEO1.png";
import brandingGraphicDesign from "../../../public/assets/Branding-GraphicDesign.png";
import eCommerce from "../../../public/assets/E-commerce.png";
import professionalTraining from "../../../public/assets/Proffetional-training.png";
import studioPhotoshoot from "../../../public/assets/studioPhotoshoot.png";
import leadGeneration from "../../../public/assets/leadgeneration.png";

// ServiceCard Component
const ServiceCard = ({ title, description, imageUrl, link }) => {
  const serviceClass = title.toLowerCase().replace(/[& ]/g, '-');

  return (
    <div className={`servicesec-card ${serviceClass}-servicesec-service`}>
      <div className="border-left"></div>
      <div className="border-right"></div>
      <div className="servicesec-card-inner">
        <div className="servicesec-icon-wrapper">
          <img src={imageUrl} alt={title} className="servicesec-icon" loading="lazy" />
        </div>
        <h3 className="servicesec-card-title">{title}</h3>
        {description && <p className="servicesec-card-description">{description}</p>}
        {link && (
          <Link to={link} className="servicesec-card-link" aria-label={`Read more about ${title}`}>
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

// ServicesSection Component with updated services
const ServicesSection = () => {
  const services = [
    { title: "Website Development", description: "We build modern, responsive websites for businesses.", imageUrl: webDevelopment, link: "/Web-Service/website-development" },
    { title: "Digital Marketing", description: "SEO, PPC, and social media strategies.", imageUrl: digitalMarketing, link: "/Digital-Marketing/digital-marketing" },
    { title: "SEO Optimization", description: "Enhancing search rankings to boost traffic.", imageUrl: seoOptimization, link: "/SEO-Optimization/seo-optimization" },
    { title: "Branding & Graphic Design", description: "Creating logos and marketing materials.", imageUrl: brandingGraphicDesign, link: "/branding-graphic-design/branding-graphic-design" },
    { title: "E-commerce Optimization", description: "Custom online stores with seamless UX.", imageUrl: eCommerce, link: "/e-commerce-optimization/e-commerce-optimization" },
    { title: "Professional Training", description: "Hands-on training in web development, Digital Marketing, UI/UX Designing", imageUrl: professionalTraining, link: "/professional-training/professional-training" },
    { title: "In House Studio", description: "Professional photography for products and brands.", imageUrl: studioPhotoshoot, link: "/in-house-studio/in-house-studio" },
    { title: "Lead Generation & Sales", description: "Strategic lead generation and conversion optimization.", imageUrl: leadGeneration, link: "/lead-generation-sales/lead-generation-sales" }
  ];

  return (
    <section className="servicesec-section" id="services">
      <h2 className="servicesec-title">Our Services</h2>
      <div className="servicesec-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
