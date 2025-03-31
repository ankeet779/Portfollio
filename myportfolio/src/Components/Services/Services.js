import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './Services.css'

const Services = () => {
  return (
<section id="Services">
  <h5>What I Offer</h5>
  <h2> Services</h2>
  <div className='container services__container'>
 

    
    <article className=" service">
< div className='service__head'>
  <h3>Data Analyst</h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Data visualization using  Power BI, or Matplotlib.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Designing visually appealing interfaces that align with the brand's identity and aesthetics.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Translating designs into functional websites using HTML, CSS, and JavaScript.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Creating user-friendly and visually appealing forms for data collection.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Iterating on designs based on feedback before moving to high-fidelity designs.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Conducting usability tests with real users to identify usability issues and gather feedback.</p>
     </li>
</ul>
    </article>
    <article className=" service">
< div className='service__head'>
  <h3>web Design </h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Designing interactive dashboards and reports for data visualization</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Developing responsive web interfaces for displaying analytical insights.
     </p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Intergrating Apis and databases to fetch and display real-time data.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Using React, JavaScript and CSS to create dynamic and user-friendly interfaces.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Ensuring accessibility and cross-device compatibility for web applications.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Using card-style layouts to present content in an organized and visually appealing manner.</p>
     </li>
</ul>
    </article>
    <article className=" service">
< div className='service__head'>
  <h3>Backend</h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Working with databases (SQL,mongo DB)</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Developing APis for data retrieval and analysis.</p>
     </li>
    
</ul>
    </article>
  </div>
  </section>  )
}

export default Services