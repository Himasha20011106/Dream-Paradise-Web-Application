import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [images.length]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const visibleImages = [
    images[(currentIndex) % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="slider" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
      <div className="image-container">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
