import React from 'react';
import '../ImageSlider.css';

const ImageSlider = ({ slides, currentSlide, handlePrevSlide, handleNextSlide, setCurrentSlide }) => {
  return (
    <div className="image-slider-container">
      <div className="image-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`image-slide ${currentSlide === index ? 'active' : ''}`}>
            <img 
              src={slide} 
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <div className="image-thumbnails">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Thumbnail ${index + 1}`}
            className={`image-thumbnail ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
