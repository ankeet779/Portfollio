import React from 'react'
import image from "../pic/IMG_6902.JPG";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import "./feature.css";
 



const Feature = () => {
  return (
    <section id = "about"> 
    <h5> Get To Know</h5>
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
      <small> 3+ Years of semester projects</small>
    </article>
    <article className = 'about__card'>
      <VscFolderLibrary className="about__icon"/>
      <h5> Projects</h5>
      <small> 5+ Completed Projects</small>
    </article>
  </div>
  <p>
  I've worked on a diverse range of projects, primarily focusing on frontend development using JavaScript and React. Additionally, I have experience in data analysis, working with SQL, Python, and Power BI to extract insights and build data-driven solutions. I also have a strong foundation in C, C++, and JavaScript, which has helped me tackle various programming challenges. My proficiency in multiple technologies allows me to contribute effectively to both development and analytical projects, making me adaptable in cross-functional teams.

</p>
  <a href='#contact' className='btn '> Let's Talk</a>
     </div>
    </div>
    </section>
    )
}

export default Feature