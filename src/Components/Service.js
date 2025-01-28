import React from 'react'
import abs from '../Assets/yellow-bg (1).png'
import one from '../Assets/Group 1.png'
import two from '../Assets/Group 1 (1).png'
import three from '../Assets/Group 74.png'



const Service = () => {
  return (
    <div className='service' id='services'>
        <img src={abs} alt="" className='ab-img2'/>
        <div className="serv">
            <div className="servv">
                <div className="serv-c">
                    <h2>My <span>Services</span></h2>
                    <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>

                    <div className="services">
                        <div className="serv1">
                            <h4><span>Web Design</span></h4>
                            <img src={one} alt="" />
                        </div>

                        <div className="serv1">
                            <h4><span>App Design</span></h4>
                            <img src={two} alt="" />
                        </div>

                        <div className="serv1">
                            <h4><span>Landing Page</span></h4>
                            <img src={three} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Service