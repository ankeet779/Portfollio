import React, { useState } from 'react'
import './Header.css'
import MyImage from '../pic/362938525_1788438208264332_6360688560440111857_n.jpg'

const Header = () => {
  // when scroll header at top
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  // toggle meanu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'> 
      <div className='container d_flex'>

      <div className='img'>
      <div className='Name'>
      <img src={MyImage}  alt="My Image" style={{ width: '60px', height: '60px', borderRadius: '100%' }} />
       <p> Ankit Rimal</p>
      </div>
      </div>
      <div className='navlink'>
        {/* <ul className='link f_flex uppercase'> */}
    
          <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase' } onClick={( ) => setMobile(false)}> 
           <li> <a href =' #home ' >home</a></li>
           <li> <a href =' #features ' >features</a></li>
           <li> <a href =' #portfolio ' >portfolio</a></li>
           <li> <a href =' #Services ' >Service</a></li>
           <li> <a href =' #blog ' >blog</a></li>
           <li> <a href =' #contact ' >contact</a></li>
           <li><button className='home-btn'>BUY NOW</button></li>
        </ul>

        <button className='toggle' onClick={() => setMobile(!Mobile)}>
          {Mobile ?
     
            <i className='fas fa-times close home-btn'></i>:
            <i className='fas fa-bars open'></i>
}
        </button>
      </div>
      </div>
    </header>
    <section className='line'></section>
    </>
  )
}

export default Header
