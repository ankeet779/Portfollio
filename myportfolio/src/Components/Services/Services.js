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
  <h3>Web Design</h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Creating visually appealing and user-friendly website layouts.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Developing responsive websites that work well on various devices and screen sizes.</p>
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
    <p>Designing websites with a single, long-scrolling page for seamless content exploration.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Using card-style layouts to present content in an organized and visually appealing manner.</p>
     </li>
</ul>
    </article>
    {/*END of Web design*/}

    
    <article className=" service">
< div className='service__head'>
  <h3>UI/UX design</h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Conducting research to understand the target audience's needs, behaviors, and preferences.</p>
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
  <h3>Mobile App</h3>
</div>
<ul className='service__list'>
  <li>
    <BsCheck className='service__list-icon'/>
    <p>Creating visually appealing and user-friendly website layouts.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Developing responsive websites that work well on various devices and screen sizes.</p>
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
    <p>Designing websites with a single, long-scrolling page for seamless content exploration.</p>
     </li>
     <li>
    <BsCheck className='service__list-icon'/>
    <p>Using card-style layouts to present content in an organized and visually appealing manner.</p>
     </li>
</ul>
    </article>
  </div>
  </section>  )
}

export default Services