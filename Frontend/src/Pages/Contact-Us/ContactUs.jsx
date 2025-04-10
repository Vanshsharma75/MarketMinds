import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("http://localhost:8003/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setResponseMessage("Error: " + (data.error || "Something went wrong!"));
        // After 3 seconds, redirect to WhatsApp
        setTimeout(() => {
          const whatsappMessage = `Hello, I'm ${formData.name}. I tried to contact through your website but encountered an error. My message: ${formData.message}`;
          const whatsappUrl = `https://wa.me/919997957533?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappUrl, '_blank');
        }, 3000);
      }
    } catch (error) {
      setResponseMessage("Error: Unable to connect to the server. Redirecting to WhatsApp...");
      // After 3 seconds, redirect to WhatsApp
      setTimeout(() => {
        const whatsappMessage = `Hello, I'm ${formData.name}. I tried to contact through your website but encountered an error. My message: ${formData.message}`;
        const whatsappUrl = `https://wa.me/919997957533?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact MarketMinds Digital Solutions</h1>
        <p>Your digital success starts here. Reach out to us today!</p>
      </div>

      {/* Contact Form and Details */}
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          {isSuccess ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Thank You for Contacting Us!</h3>
              <p>Your message has been successfully sent to MarketMinds Digital Solutions.</p>
              <p>Our team will get back to you within 6-12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="Number"
                name="number"
                placeholder="Your Phone number"
                value={formData.Number}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
          {responseMessage && (
            <div className="response-message">
              {responseMessage}
              {responseMessage.includes("Error") && (
                <p>Redirecting you to WhatsApp in a moment...</p>
              )}
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>We're here to help. Connect with us anytime.</p>
          <div className="contact-info">
            <p><span>📍</span> Vaishali, India</p>
            <p>
              <span>📞</span> 
              <a href="https://wa.me/919997957533" target="_blank" rel="noopener noreferrer">
              +91 9997957533(WhatsApp)
              </a>
            </p>
            <p>
              <span>✉️</span> 
              <a href="mailto:marketmindsdigitalsolutions@gmail.com">marketmindsdigitalsolutions@gmail.com</a>
            </p>
            <p>
              <span>🌐</span> 
              <a href="https://www.linkedin.com/company/marketminds-digital-solutions/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <p>
              <span>🏢</span> 
              <a href="https://g.co/kgs/vp7ko4h" target="_blank" rel="noopener noreferrer">
                Google Business Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
