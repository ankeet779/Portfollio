import React from "react";
import "./home.css";
import image from "../pic/IMG_7336-removebg-preview.png";
import skill1 from "../pic/flutter.jpg";
import skill2 from "../pic/react.png";
import skill3 from "../pic/2560px-Qt_logo_2016.svg.png";
import image2 from "../pic/image.png";
import { Typewriter } from "react-simple-typewriter";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome to my world</h3>
            <h1>
              Hi, I'm <span>Ankit Rimal</span>
            </h1>
            <h2>
              a{" "}
              <span>
                <Typewriter
                  words={[ "Frontend Developer", "Data Analyst"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
          
              I specialize in front-end development using HTML, CSS, and JavaScript, with expertise in modern frameworks like React. Additionally, I have experience in data analysis, leveraging SQL, Python, and Power BI to extract insights and enhance decision-making. I am skilled in implementing responsive and accessible designs, ensuring seamless user experiences across various devices and browsers while integrating data-driven solutions.


            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND ME IN</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a
                      href="https://www.facebook.com/ankit.rimal.7468/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.instagram.com/ankeet_rimal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.linkedin.com/in/ankit-rimal-275908235/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={image2} alt="" />
                </button>
               
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={image} alt="My Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
