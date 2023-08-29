import React from 'react'
import image from "../pic/IMG_6902.JPG";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import "./feature.css";
 



const Feature = () => {
  return (
    <section id = "features"> 
    <h3> Get To Know</h3>
    <h1> About Me</h1>
    <div className = 'container about__container'>
      <div className = 'about__me'>
        <div className='about__me-image'>
        <img src={image} alt="About Image"  />
        </div>
        </div>
     <div className = 'about__content'>

  <div className = 'about__cards'>
    <article className = 'about__card'>
      <FaAward className="about__icon"/>
      <h5> Experience</h5>
      <small> 3+ Years of working</small>
    </article><article className = 'about__card'>
      <FiUsers className="about__icon"/>
      <h5> Clients</h5>
      <small> 100+ worldwide</small>
    </article>
    <article className = 'about__card'>
      <VscFolderLibrary className="about__icon"/>
      <h5> Projects</h5>
      <small> 5+ Completed Projects</small>
    </article>
  </div>
  <p>
  I've worked on a diverse range of projects, primarily focusing on frontend development using JavaScript and React. I also bring experience in handling C++, JavaScript, C, and Python. These projects have honed my skills in creating dynamic and user-friendly interfaces while also equipping me to tackle various programming challenges. My proficiency in multiple languages has allowed me to contribute effectively to cross-functional teams and develop well-rounded solutions.
  </p>
  <a href='#contact' className='btn '> Let's Talk</a>
     </div>
    </div>
    </section>
    )
}

export default Feature