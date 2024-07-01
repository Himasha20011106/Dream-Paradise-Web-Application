import React, { useState, useEffect, useRef } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  { id: 1, name: 'Nitesh Jindal', text: ' They are the perfect wedding venue organisers. Leave it up to them and you don’t have to worry about anything. ' },
  { id: 2, name: 'Sheetal Mehta', text: ' The perfect stop for all your wedding venue needs. They are experts in arranging things the way you like. ' },
  { id: 3, name: 'Rahul Kapoor', text: ' Exceptional service! They transformed our event into an unforgettable experience. Highly recommended for anyone looking to host a flawless event. ' },
  { id: 4, name: 'Priya Singh', text: ' The team at DreamParadise made our wedding day magical. From decor to catering, they handled everything with utmost professionalism and care. ' },
  { id: 5, name: 'Amit Patel', text: ' Choosing DreamParadise was the best decision we made for our corporate event. Impeccable attention to detail and a stunning venue. ' },
  { id: 6, name: 'Riya Sharma', text: " I can't thank enough for making my sister's birthday celebration so special. Their personalized service and beautiful ambiance exceeded our expectations. " },
  { id: 7, name: 'Sanjay Verma', text: ' For anyone planning a milestone celebration, look no further. DreamParadise offers top-notch facilities and a dedicated team committed to perfection. ' },
  { id: 8, name: 'Alisha Gupta', text: ' Absolutely stunning! DreamParadise turned our anniversary into a fairy tale. Their attention to detail and impeccable service made it an unforgettable evening. ' }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
      <div className="testimonial-container">
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
          <div key={testimonial.id} className="testimonial">
            <footer><span class="quote"></span>{testimonial.name}</footer>
            <p>&ldquo;{testimonial.text}&rdquo;</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;