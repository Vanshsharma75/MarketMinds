import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Home/ServicesPreview.css";
import webDevImg from "../../../../public/assets/web-dev1.png";
import webDevImg2 from "../../../../public/assets/web-dev.png";
import graphicImg from "../../../../public/assets/graphic1.png";
import graphicImg2 from "../../../../public/assets/graphic.png";
import digitalImg from "../../../../public/assets/digital1.png";
import digitalImg2 from "../../../../public/assets/digital2.png";
import ecomImg from "../../../../public/assets/e-com1.png";
import ecomImg2 from "../../../../public/assets/e-com2.png";
import leadImg from "../../../../public/assets/lead1.png";
import leadImg2 from "../../../../public/assets/lead2.png";
import seoImg from "../../../../public/assets/seo1.1.png";
import seoImg2 from "../../../../public/assets/seo2.png";
import trainingImg from "../../../../public/assets/traning1.png";
import trainingImg2 from "../../../../public/assets/traning2.png";
import leadgenImg from "../../../../public/assets/leadgen1.jpeg";
import leadgenImg2 from "../../../../public/assets/leadgen2.jpg";

const services = [
  {
    name: "Web Development",
    link: "/Web-Service/website-development",
    image: webDevImg,
    projectImage: webDevImg2,
  },
  {
    name: "Digital Marketing",
    link: "/Digital-Marketing/digital-marketing",
    image: digitalImg,
    projectImage: digitalImg2,
  },
  {
    name: "SEO Optimization",
    link: "/SEO-Optimization/seo-optimization",
    image: seoImg,
    projectImage: seoImg2,
  },
  {
    name: "Branding & Graphic Design",
    link: "/branding-graphic-design/branding-graphic-design",
    image: graphicImg,
    projectImage: graphicImg2,
  },
  {
    name: "E-Commerce Optimization",
    link: "/e-commerce-optimization/e-commerce-optimization",
    image: ecomImg,
    projectImage: ecomImg2,
  },
  {
    name: "Professional Training",
    link: "/professional-training/professional-training",
    image: trainingImg,
    projectImage: trainingImg2,
  },
  {
    name: "In-House Studio",
    link: "/In-House-Studio/in-house-studio",
    image: leadImg,
    projectImage: leadImg2,
  },
  {
    name: "Lead Generation & Sales",
    link: "/lead-generation-sales/lead-generation-sales",
    image: leadgenImg,
    projectImage: leadgenImg2,
  },
];
const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(0);

  return (
    <section className="services-preview">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-layout">
        <div className="services-list">
          <div className="service-items">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item1 ${
                  hoveredService === index ? "active" : ""
                }`}
                onMouseEnter={() => setHoveredService(index)}
              >
                {hoveredService === index && <div className="service-indicator" />}
                <Link to={service.link} className="service-link">
                  {service.name}
                  <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="services-content">
          <div className="service-image">
            <img
              src={services[hoveredService].image}
              alt={services[hoveredService].name}
              className={`preview-image fade-in`}
            />
          </div>
          <div className="projects-section">
            <div className="projects-preview">
              <img
                src={services[hoveredService].projectImage}
                alt="Project"
                className="projects-img fade-in"
              />

              <span>Projects →</span>
            </div>
            <Link
              to={services[hoveredService].link}
              className="view-projects-btn"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
