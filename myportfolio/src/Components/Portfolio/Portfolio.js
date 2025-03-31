import React from 'react'
import portfolio1 from '../../Image/Portfolio1.jpg'
import portfolio2 from '../../Image/portfolio2.png'
import portfolio3 from '../../Image/Portfolio3.jpg'
import portfolio4 from '../../Image/portfolio4.png'
import image from '../../Image/image.png'
import pizza from '../../Image/pizza.jpg'
import bankloan from '../../Image/bankloan.png'
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
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio2} alt=''/>
            <h3> Unify</h3>
            <a href='https://github.com/ankeet779/Unify' className='btn' target='blank'>Github</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio3} alt=''/>
            <h3> Unilife</h3>
            <a href='https://github.com/ankeet779/Unilife' className='btn' target='blank'>Github</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={pizza} alt=''/>
            <h3> Pizza Sales Report</h3>
            <a href='https://github.com/ankeet779/pizza-sales-report' className='btn' target='blank'>Github</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={image} alt=''/>
            <h3> Stock Trend Prediction</h3>
            <a href='github.com/ankeet779/stock-trend-prediction' className='btn' target='blank'>Github</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={bankloan} alt=''/>
            <h3> Bank Loan Analysis</h3>
            <a href='https://github.com/ankeet779/Bank-Loan-Analysis' className='btn' target='blank'>Github</a>
        </div>
    </article>
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={portfolio4} alt=''/>
            <h3> Portfolio</h3>
            <a href='https://github.com/ankeet779/Portfollio' className='btn' target='blank'>Github</a>
        </div>
    </article>
   
</div>
    </section>  )
}

export default Portfolio
