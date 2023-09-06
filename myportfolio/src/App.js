import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Hero/home';
import './App.css';
import Feature from './Components/Feature/feature';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
const App = () => {
  return  (
<>  <Header/>
  <Home/>
  <Feature/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Contact/>
  </>
  )
}

export default App
