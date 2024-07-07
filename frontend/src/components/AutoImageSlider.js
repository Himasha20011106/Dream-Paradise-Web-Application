import React, { useState, useEffect } from "react";
import './AutoImageSlider.css'; 

const AutoImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="autoslider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slides ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default AutoImageSlider;
