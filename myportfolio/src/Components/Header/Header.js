import React, { useState, useEffect } from "react";
import "./Header.css";
import MyImage from "../pic/362938525_1788438208264332_6360688560440111857_n.jpg";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  // When scroll, add an "active" class to the header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          {/* Logo Section */}
          <div className="img">
            <div className="Name">
              <img
                src={MyImage}
                alt="My Image"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "100%",
                }}
              />
              <p>Ankit Rimal</p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* Toggle Button for Mobile */}
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="line"></section>
    </>
  );
};

export default Header;
