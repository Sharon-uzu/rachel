import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pass from '../Assets/Techpass 1.png';
import maisom from '../Assets/maison 1.png';
import bloom from '../Assets/Bloom 1.png';
import fur from '../Assets/Group 74 2.png';
import agro from '../Assets/Group 6131.png';

const Projects = () => {
  return (
    <div className='projects'>
        {/* Animated Heading */}
        <motion.div 
            className="top-txt"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2>My <span>Projects</span></h2>
            <p> I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>
        </motion.div>

        {/* Project Cards with Unique Animations */}
        <div className="proj">
            <div className="first p-f">
                {/* Slide-up animation */}
                <motion.div 
                    className="p-cards"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={pass} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Web Design </h4>
                            <h3>Techpass Africa Website Page Design</h3>
                        </div>
                        <a href="https://www.techpass.africa/"><button>View Project</button></a>
                    </div>
                    <ul>
                        <li>Problem: TechPass needed a unique and user-friendly website to showcase its services.</li>
                        <li>Solution: Designed an intuitive layout with clear navigation and bold visuals tailored to the tech industry.</li>
                        <li>Impact: Increased site traffic and user engagement.</li>
                    </ul>
                </motion.div>

                {/* Zoom-in animation */}
                <motion.div 
                    className="p-cards p-c2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={maisom} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Web Design </h4>
                            <h3>Maison Wellness Website Page Design</h3>
                        </div>
                        <a href="https://maisomwellness.netlify.app/"><button>View Project</button></a>
                    </div>
                    <ul>
                        <li>Problem: Crafting a wellness platform with booking and payment integration.</li>
                        <li>Solution: Created a sleek, responsive website with user-friendly service navigation.</li>
                        <li>Impact: Increased service bookings by 40%.</li>
                    </ul>
                </motion.div>

                {/* Rotate-in animation */}
                <motion.div 
                    className="p-cards p-c3"
                    initial={{ rotate: -10, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={bloom} alt="" />
                    <div className="cont">
                        <div>
                            <h4>App Design </h4>
                            <h3>Bloompay App Design</h3>
                        </div>
                        <a href="https://www.mybloompay.com/"><button>View Project</button></a>
                    </div>

                    <ul>
                        <li>Problem: Designing a seamless payment system for diverse users.</li>
                        <li>Solution: Delivered an interactive dashboard and easy-to-use mobile app for smooth transactions.</li>
                        <li>Impact: Reduced customer complaints by 30%.</li>
                    </ul>

                </motion.div>

                {/* Fade-in from left animation */}
                <motion.div 
                    className="p-cards p-c4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={fur} alt="" />
                    <div className="cont">
                        <div>
                            <h4>Landing Page Design </h4>
                            <h3>Furniture Store Landing Page Design</h3>
                        </div>
                        <a href="https://www.behance.net/gallery/213647143/FURNITURE-LANDING-PAGE"><button>View Project</button></a>
                    </div>
                    <ul>
                        <li>Problem: Designing a seamless payment system for diverse users.</li>
                        <li>Solution: Delivered an interactive dashboard and easy-to-use mobile app for smooth transactions.</li>
                        <li>Impact: Reduced customer complaints by 30%.</li>
                    </ul>
                </motion.div>
            </div>

            {/* Fade-in from right animation */}
            <div className="first second">
                <motion.div 
                    className="p-cards"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={agro} alt="" />
                    <div className="cont">
                        <div>
                            <h4>App Design</h4>
                            <h3>Agropaddy App Design</h3>
                        </div>
                        <a href="https://www.agropaddy.com/?fbclid=IwY2xjawJJDY9leHRuA2FlbQIxMAABHT075hEtEJcJV38FqK9DeHjwm0wqVaDdG97Pi7ZYAv2WwcIsQmOswKQfoQ_aem_k2BjPe5u1d2Nx6qcSU1hag"><button>View Project</button></a>
                    </div>

                    <ul>
                    <li>Problem: Enhancing the experience for ordering and exploring food options.</li>
                    <li>Solution: Developed a visually appealing and interactive app focusing on usability and customization.</li>
                    <li>Impact: Improved average order completion rate by 20%.</li>
                </ul>
                
                </motion.div>

               
                
            </div>
        </div>

        {/* Animated Button */}
        <motion.div 
            className="p-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to="/project"><button style={{cursor:'pointer'}}>See all projects</button></Link>
        </motion.div>

        
    </div>
  )
}

export default Projects;
