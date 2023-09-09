import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Hero/home';
import './App.css';
import Feature from './Components/Feature/feature';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
const App = () => {
  return  (
<>
  <Header/>
  <Home/>
  <Feature/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Testimonial/>
  <Contact/>
  <Footer/>

  </>
  )
}

export default App
