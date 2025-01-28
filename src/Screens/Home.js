import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Why from '../Components/Why'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Why/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home