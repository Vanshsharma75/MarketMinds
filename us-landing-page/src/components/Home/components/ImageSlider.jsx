import React, { useState, useEffect, useRef } from 'react';
import '../ImageSlider.css';

const ImageSlider = ({ slides, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // --- Autoplay ---
  useEffect(() => {
    startAutoplay();
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoplayInterval, slides.length]); // Added missing dependencies

  const startAutoplay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goToSlide((currentIndex + 1) % slides.length);
    }, autoplayInterval);
  };

  // --- Slide Navigation ---
  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  // --- Touch Support ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) nextSlide(); // Swiped left
    else if (distance < -threshold) prevSlide(); // Swiped right

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="image-slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-slider-track">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`image-slider-slide ${
              index === currentIndex
                ? 'active'
                : index === prevIndex
                ? 'previous'
                : ''
            }`}
          >
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="image-slider-button image-slider-button-prev"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="image-slider-button image-slider-button-next"
      >
        ›
      </button>

      <div className="image-slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`image-slider-dot ${
              index === currentIndex ? 'image-slider-dot-active' : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
