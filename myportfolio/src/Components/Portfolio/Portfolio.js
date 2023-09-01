import React from 'react'
import portfolio1 from '../../Image/Portfolio1.jpg'
import portfolio2 from '../../Image/portfolio2.png'
import portfolio3 from '../../Image/Portfolio3.jpg'
import portfolio4 from '../../Image/portfolio4.png'
import './Portfolio.css'


const Portfolio = () => {
  return (
<section id="portfolio">
    <h5> My Recent Work</h5>
    <h2> Portfolio</h2>

< div className='container portfolio__container'>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio1} alt=''/>
            <h3> BMS: Block Management System</h3>
            <a href='https://github.com/ankeet779/bms-project' className='btn' target='blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels/' className='btn btn-primary'  target='blank'>Live Demo</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio2} alt=''/>
            <h3> Unify</h3>
            <a href='https://github.com/ankeet779/Unify' className='btn' target='blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels/' className='btn btn-primary'  target='blank'>Live Demo</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio3} alt=''/>
            <h3> Unilife</h3>
            <a href='https://github.com/ankeet779/Unilife' className='btn' target='blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels/' className='btn btn-primary'  target='blank'>Live Demo</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio4} alt=''/>
            <h3> Portfolio</h3>
            <a href='https://github.com/ankeet779/Portfollio' className='btn' target='blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels/' className='btn btn-primary'  target='blank'>Live Demo</a>
        </div>
    </article>
   
</div>
    </section>  )
}

export default Portfolio
