import React, { useState } from "react";
import "./Testimonial.css";
import Slide from "./Slide";
import TestimonialApi from "./TestimonialApi";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Function to handle next/previous slide
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % TestimonialApi.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialApi.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="Testimonial" id="testimonial">
      <div className="container">
        <div className="heading text-center">
          <h4>WHAT CLIENTS SAY</h4>
          <h1>Testimonial</h1>
        </div>
        <div className="slider">
          {/* Display only the active slide */}
          <Slide key={TestimonialApi[index].id} {...TestimonialApi[index]} />

          {/* Arrow Navigation */}
          <div className="slider-buttons">
            <button className="btn-shadow prev-btn" onClick={handlePrev}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="btn-shadow next-btn" onClick={handleNext}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
