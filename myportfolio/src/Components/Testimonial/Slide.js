import React from "react";
import "./slide.css";
import TestimonialApi from "./TestimonialApi";
import { FaQuoteRight } from "react-icons/fa";

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
  let position = "nextSlide";
  if (valueIndex === index) {
    position = "activeSlide";
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide";
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        {/* Left Section: Image and Details */}
        <div className="left box_shadow">
          <div className="img">
            <img src={image} alt={name} />
          </div>
          <div className="details">
            <h2>{name}</h2>
            <p>{design}</p>
          </div>
        </div>

        {/* Right Section: Testimonial Content */}
        <div className="right">
          <div className="content box_shadow mtop">
            <p>{desc}</p>
          </div>

          {/* Quote Icon */}
          <div className="icon">
            <div className="quote">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Slide;
