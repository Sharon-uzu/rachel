import React from 'react'
import top from '../Assets/Vector 3.png'
import three from '../Assets/Rectangle 367.png'
import one from '../Assets/IMG_4130 3.png'
import two from '../Assets/IMG_4130 1.png'
const Why = () => {
  return (
    <div className='why'>
        <img src={top} alt="" className='abs-top'/>
        <div className="hire">
            <h2>Why Hire Me</h2>
            <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>

            <div className="abs-imgs">
                <img src={one} alt="" className='a-i-1'/>
                <img src={two} alt="" className='a-i-2'/>
                <img src={three} alt="" className='a-i-3'/>

                <div className="exp">
                    <div>
                        <h6>+40</h6>
                        <h3>Projects</h3>
                    </div>
                    <div>
                        <h6>+2yrs</h6>
                        <h3>Experience</h3>
                    </div>
                    <div>
                        <h6>+40</h6>
                        <h3>Trained Students</h3>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Why