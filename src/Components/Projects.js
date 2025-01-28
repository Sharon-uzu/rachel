import React from 'react'
import { Link } from 'react-router-dom'
import pass from '../Assets/Techpass 1.png'
import maisom from '../Assets/maison 1.png'
import bloom from '../Assets/Bloom 1.png'
import fur from '../Assets/Group 74 2.png'
import agro from '../Assets/Group 6131.png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="top-txt">
            <h2>My <span>Projects</span></h2>
            <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>
        </div>
        <div className="proj">
            <div className="first p-f">
                <div className="p-cards">
                    <img src={pass} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Web Design </h4>
                            <h3>Techpass Africa Website Page Design</h3>
                        </div>
                        <a href=""><button>View Project</button></a>
                    </div>
                </div>

                <div className="p-cards p-c2">
                    <img src={maisom} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Web Design </h4>
                            <h3>Maison Wellness Website Page Design </h3>
                        </div>
                        <a href=""><button>View Project</button></a>
                    </div>
                </div>

                <div className="p-cards p-c3">
                    <img src={bloom} alt="" />
                    <div className="cont">
                        <div>
                            <h4>App Design </h4>
                            <h3>Bloompay App Design</h3>
                        </div>
                        <a href=""><button>View Project</button></a>
                    </div>
                </div>

                <div className="p-cards p-c4">
                    <img src={fur} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Landing Page Design </h4>
                            <h3>Furniture Store Landing Page Design </h3>
                        </div>
                        <a href=""><button>View Project</button></a>
                    </div>
                </div>

            </div>

            <div className=" first second">
                <div className="p-cards">
                    <img src={agro} alt="" />
                    <div className="cont">
                        <div>
                            <h4>App Design</h4>
                            <h3>Agropaddy App Design</h3>
                        </div>
                        <a href=""><button>View Project</button></a>
                    </div>
                </div>
            </div>

            
        </div>

        <div className="p-btn">
            <Link to="/project"><button>See all projects</button></Link>
        </div>
        
    </div>
  )
}

export default Projects