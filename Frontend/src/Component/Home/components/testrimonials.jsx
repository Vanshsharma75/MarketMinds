import React from 'react';
import '../Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-slider">
        <div className="testimonials-container">
          <div className="testimonial-item testimonials-intro-card">
            <h2 className="testimonials-intro-title">LOVE FROM OUR FAMILY ❤️</h2>
            <p className="testimonials-intro-subtitle">Read What Our Clients Have To Say With Their Experience Working With Us</p>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-body">
            <div className="testimonial-footer">
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Sports & Beyond</h4>
                  <p className="testimonial-author-title">Brand Partner</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Working with MarketMinds Digital Solutions has been a game-changer for our brand, Sports and Beyond. 
                Their strategic approach and dedication to quality have truly transformed our digital presence."
              </p>
            </div>
            <div className="testimonial-rating"></div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-body">
            <div className="testimonial-footer">
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">TLO Momos</h4>
                  <p className="testimonial-author-title">Food Chain Owner</p>
                </div>
              </div>
              
              <p className="testimonial-text">
                "We at TLO Food Chain are extremely impressed with the professionalism and quality of work 
                delivered by MarketMinds. Their expertise in digital solutions has significantly improved our 
                online presence."
              </p>
              <div className="testimonial-rating"></div>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-body">
            <div className="testimonial-footer">
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Shivam Sharma</h4>
                  <p className="testimonial-author-title">Business Owner</p>
                </div>
              </div>
              
              <p className="testimonial-text">
                "It was a great experience taking the services from Marketminds Digital Solutions, 
                best in town! Their team's dedication and expertise made all the difference."
              </p>
              <div className="testimonial-rating"></div>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-body">
            <div className="testimonial-footer">
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">Princy Singhal</h4>
                  <p className="testimonial-author-title">Satisfied Client</p>
                </div>
              </div>
              
              <p className="testimonial-text">
                "Awesome experience with MarketMinds Digital Solutions! Fully satisfied with their 
                services and professional approach. Would definitely recommend their services."
              </p>
              <div className="testimonial-rating"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;