import React, { useState } from "react";
import './professional-training.css';
import professional1 from '../../../assets/proffetional1.png';
import professional2 from '../../../assets/proffetional2.png';
import liveSession from '../../../assets/live-session.png';
import practicalAssessment from '../../../assets/practical-assesment.png';
import oneOnOne from '../../../assets/one-on-one.png';
import industryExpert from '../../../assets/industry-expert.png';

const TrainingPrograms = () => {
  const [activeProgram, setActiveProgram] = useState("Web Development");

  const programDetails = {
    "Web Development": [
      "Frontend Development (HTML, CSS, JavaScript)",
      "React.js Development",
      "Backend Technologies",
      "Full Stack Development",
    ],
    "Digital Marketing": [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing Strategy",
    ],
    "UI/UX Design": [
      "User Research and Analysis",
      "Wireframing and Prototyping",
      "Visual Design Principles",
      "Usability Testing",
    ],
  };

  return (
    <section className="training-programs1">
      <h2 className="programs-title1">Our Training Programs Include:</h2>
      <div className="programs-list1">
        {Object.keys(programDetails).map((program) => (
          <button
            key={program}
            className={`program-item1 ${
              activeProgram === program ? "active" : ""
            }`}
            onClick={() => setActiveProgram(program)}
          >
            {program}
          </button>
        ))}
      </div>
      <div className="program-details1">
        <ul>
          {programDetails[activeProgram].map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const ProfessionalTraining = () => {
  return (
    <div className="training-page">
      <section className="training-header">
        <h1 className="training-title">Professional Training</h1>
        <p className="training-subtitle">
        Our practical, project-based approach ensures you gain in-demand skills and industry-relevant experience to thrive in today’s digital landscape.
        </p>
      </section>

      <section className="training-intro">
        <div className="training-intro-left">
          <img src={professional1} alt="Training Session" className="training-image1" />
          <img src={professional2} alt="Training Session" className="training-image2" />
        </div>
        <div className="training-intro-right">
          <div className="training-highlight">
            <h2 className="highlight-title">Why Choose Professional Training</h2>
            <p className="highlight-description">
              Elevate your career with our comprehensive professional training programs. We offer specialized courses in Web Development, Digital Marketing, and UI/UX Design, taught by industry experts with hands-on experience.
            </p>
          </div>
        </div>
      </section>

      <TrainingPrograms />

      <section className="training-benefits">
        <h2 className="benefits-title">What You'll Get:</h2>
        <div className="benefits-list">
          <div className="benefit-item">Hands-on Project Experience</div>
          <div className="benefit-item">Industry-Standard Tools Training</div>
          <div className="benefit-item">Real-world Case Studies</div>
          <div className="benefit-item">Portfolio Development Support</div>
          <div className="benefit-item">Job Placement Assistance</div>
          <div className="benefit-item">Post-Training Support</div>
        </div>
      </section>

      <section className="training-methodology">
        <h2 className="methodology-title">Our Training Methodology:</h2>
        <div className="methodology-steps">
          <div className="step-item">
            <img src={liveSession} alt="Interactive Live Sessions" className="step-icon" />
            <p className="step-description">Interactive Live Sessions</p>
          </div>
          <div className="step-item">
            <p className="step-description1">Practical Assignments</p>
            <img src={practicalAssessment} alt="Practical Assignments" className="step-icon" />
          </div>
          <div className="step-item">
            <img src={oneOnOne} alt="1-on-1 Mentorship" className="step-icon" />
            <p className="step-description">1-on-1 Mentorship</p>
          </div>
          <div className="step-item">
            <p className="step-description1">Industry Expert Sessions</p>
            <img src={industryExpert} alt="Industry Expert Sessions" className="step-icon" />
          </div>
        </div>
      </section>
      <div className="leadgen-contact-button-container">
        <a href="/contact" className="leadgen-contact-service-button">
          Contact Us About this Service
        </a>
      </div>
    </div>
  );
};

export default ProfessionalTraining;