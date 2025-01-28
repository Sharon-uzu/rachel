import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/DRAY.png'
import pass from '../Assets/Techpass 1.png'
import maisom from '../Assets/maison 1.png'
import bloom from '../Assets/Bloom 1.png'
import fur from '../Assets/Group 74 2.png'
import agro from '../Assets/agroo 1.png'
import {useLocation} from "react-router-dom";
import food from '../Assets/foodcasestudy 1.png'
import python from '../Assets/pythons 1.png'
import agrovest from '../Assets/agro 1.png'
import dokita from '../Assets/dokita 2.png'
import tracker from '../Assets/Group 1000002782.png'





const ProjectScreen = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);

  return (
    <div>
        <header>
            <nav>
                <Link to='/'><img src={logo} alt="" /></Link>

                
            </nav>
        </header>

        <div className='projects all-projects'>
        <div className="top-txt">
            <h2>My <span>Projects</span></h2>
            <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>
        </div>
        <div className="proj">
            <div className="first p-f">
                <div className="pp-f">
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
                </div>

                <div className="pp-f">
                    <div className="p-cards">
                        <img src={maisom} alt="" />
                        <div className="cont">
                            <div>
                                <h4>Web Design </h4>
                                <h3>Maison Wellness Website Page Design </h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>

                <div className="pp-f">
                    <div className="p-cards">
                        <img src={bloom} alt="" />
                        <div className="cont">
                            <div>
                                <h4>App Design </h4>
                                <h3>Bloompay App Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>

                <div className="pp-f">
                    <div className="p-cards">
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

                <div className="pp-f">
                    <div className="p-cards">
                        <img src={agro} alt="" />
                        <div className="cont">
                            <div>
                                <h4>App Design</h4>
                                <h3>Agropaddy App Design</h3>
                            </div>
                            <button>In Progress</button>
                        </div>
                    </div>
                </div>


                <div className="pp-f">
                    <div className="p-cards">
                        <img src={food} alt="" />
                        <div className="cont">
                            <div>
                                <h4>Web Design</h4>
                                <h3>Food Case Study Website Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>

                <div className="pp-f">
                    <div className="p-cards">
                        <img src={python} alt="" />
                        <div className="cont">
                            <div>
                                <h4>Web Design</h4>
                                <h3>Python Website Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>


                <div className="pp-f">
                    <div className="p-cards">
                        <img src={agrovest} alt="" />
                        <div className="cont">
                            <div>
                                <h4>Web Design</h4>
                                <h3>AgroVest Web Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>


                <div className="pp-f">
                    <div className="p-cards">
                        <img src={dokita} alt="" />
                        <div className="cont">
                            <div>
                                <h4>Web Design</h4>
                                <h3>Dokita Website Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>


                <div className="pp-f">
                    <div className="p-cards">
                        <img src={tracker} alt="" />
                        <div className="cont">
                            <div>
                                <h4>App Design</h4>
                                <h3>Expense Tracker Design</h3>
                            </div>
                            <a href=""><button>View Project</button></a>
                        </div>
                    </div>
                </div>

            </div>

           
        </div>

        
        
    </div>
    </div>
    
  )
}

export default ProjectScreen