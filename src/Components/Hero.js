import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../Assets/hero.png'
const Hero = () => {
  return (
    <div className='hero' id='aboutme'>
        <div className="h-txt">
            <h3>Product Designer</h3>
            <h2>Hello, I am Racheal Obereniokuma</h2>
            <p>A Product Designer with over two years of experience creating intuitive, user-focused digital products. My work spans the full design process, from research to prototyping, with a focus on balancing functionality and aesthetics. I’m passionate about using design to drive meaningful change and currently lead impactful projects at Harvoxx Tech Hub.</p>
            <a href="#contacts"><button>Hire me</button></a>
        </div>

        <div className="h-img">
            <img src={hero} alt="" />
        </div>
        
    </div>
  )
}

export default Hero