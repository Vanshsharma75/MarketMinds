import React from "react";
import { Link } from "react-router-dom";
import "./in-house-studio.css";
import topimg1 from "../../../assets/topimg (1).png";
import topimg2 from "../../../assets/topimg (2).png";
import topimg3 from "../../../assets/topimg (3).png";
import photoservice from "../../../assets/photoservice.png";
import videoservice from "../../../assets/videoservice.png";
import productionimg from "../../../assets/productionimg.png";
import proffetionalimg from "../../../assets/proffetionalimg.png";
import audioimg from "../../../assets/audioimg.png";
import img4k from "../../../assets/4kimg.png";
import greenscimg from "../../../assets/greenscimg.png";
import multipleimg from "../../../assets/multipleimg.png";

const InHouseStudio = () => {
  return (
    <div className="studio-page-wrapper">
      <section className="studio-hero-section">
        <div className="studio-hero-text">
          <h2 className="studio-hero-title">
            Professional Photography & Videography Studio
          </h2>
          <p className="studio-hero-subtext">
            Our cutting-edge equipment, experienced creative team, and
            purpose-built studio space ensure every project exceeds industry
            standards and your expectations.
          </p>
        </div>

        <div className="studio-hero-images">
          <img src={topimg1} alt="Photography" />
          <img src={topimg2} alt="Product Setup" />
          <img src={topimg3} alt="Video Equipment" />
        </div>

        <div className="studio-intro-text">
          <p>
            Transform your brand's visual identity with our state-of-the-art
            in-house studio services. We combine professional photography and
            videography expertise to create compelling visual content that
            elevates your brand, products, and services to new heights.
          </p>
        </div>
      </section>

      <section className="studio-photo-services-section">
        <div className="studio-photography-block">
          <h3 className="studio-section-title">
            Professional Photography Services
          </h3>
          <div className="studio-service-content">
            <img src={photoservice} alt="Photography Session" />
            <ul className="studio-service-list">
              {[
                {
                  title: "Product Photography",
                  desc: "High-quality product shots with perfect lighting and composition",
                },
                {
                  title: "Corporate Portraits",
                  desc: "Professional headshots and team photos for business profiles",
                },
                {
                  title: "Brand Story Photography",
                  desc: "Lifestyle and narrative shots that tell your brand's unique story",
                },
                {
                  title: "E-commerce Photography",
                  desc: "Optimized product images for online stores with multiple angles",
                },
                {
                  title: "360° Product Views",
                  desc: "Interactive product photography for immersive viewing experience",
                },
                {
                  title: "Event Photography",
                  desc: "Comprehensive coverage of corporate events and launches",
                },
              ].map((service, index) => (
                <li key={index}>
                  <div className="service-header">
                    <strong>{service.title}</strong>
                    <button
                      className="toggle-btn"
                      onClick={(e) => {
                        const desc =
                          e.currentTarget.parentNode.nextElementSibling;
                        desc.style.display =
                          desc.style.display === "none" ? "block" : "none";
                        e.currentTarget.innerHTML =
                          desc.style.display === "none" ? "+" : "-";
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p style={{ display: "none" }}>{service.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="studio-video-service-section">
        <div className="studio-videography-block">
          <h3 className="studio-section-title">
            Professional Videography Services
          </h3>
          <div className="studio-service-content reverse">
            <ul className="studio-service-list">
              {[
                {
                  title: "Product Videos",
                  desc: "Dynamic product demonstrations and feature highlights",
                },
                {
                  title: "Corporate Videos",
                  desc: "Professional company profiles and promotional content",
                },
                {
                  title: "Brand Story Films",
                  desc: "Cinematic storytelling that captures your brand's essence",
                },
                {
                  title: "Social Media Content",
                  desc: "Engaging short-form videos optimized for social platforms",
                },
                {
                  title: "Event Coverage",
                  desc: "Professional filming of corporate events and conferences",
                },
                {
                  title: "Aerial Videography",
                  desc: "Stunning drone footage for unique perspectives",
                },
              ].map((service, index) => (
                <li key={index}>
                  <div className="service-header">
                    <strong>{service.title}</strong>
                    <button
                      className="toggle-btn"
                      onClick={(e) => {
                        const desc =
                          e.currentTarget.parentNode.nextElementSibling;
                        desc.style.display =
                          desc.style.display === "none" ? "block" : "none";
                        e.currentTarget.innerHTML =
                          desc.style.display === "none" ? "+" : "-";
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p style={{ display: "none" }}>{service.desc}</p>
                </li>
              ))}
            </ul>
            <img src={videoservice} alt="Videography Session" />
          </div>
        </div>
      </section>

      <section className="studio-capabilities-section">
        <h3 className="studio-section-title">Studio Capabilities</h3>
        <div className="studio-capabilities-grid">
          <div className="capability-card">
            <img src={proffetionalimg} alt="" />
            <p>Professional Lighting Equipment</p>
          </div>
          <div className="capability-card">
            <img src={multipleimg} alt="" />
            <p>Multiple Shooting Areas</p>
          </div>
          <div className="capability-card">
            <img src={greenscimg} alt="" />
            <p>Green Screen Facility</p>
          </div>
          <div className="capability-card">
            <img src={img4k} alt="" />
            <p>4K Video Recording</p>
          </div>
          <div className="capability-card">
            <img src={audioimg} alt="" />
            <p>Professional Audio Recording</p>
          </div>
          <div className="capability-card">
            <img src={productionimg} alt="" />
            <p>Post-Production Suite</p>
          </div>
        </div>
      </section>

      <div className="studio-cta-section">
        <Link to="/contact" className="contact-service-button">
          Schedule a Studio Session
        </Link>
      </div>
    </div>
  );
};

export default InHouseStudio;
