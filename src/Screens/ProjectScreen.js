import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/DRAY.png';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';

// Project Data Array
const projects = [
    { id: 1, category: "Web Design", title: "Techpass Africa Website Page Design", image: require('../Assets/Techpass 1.png'), link: "#" },
    { id: 2, category: "Web Design", title: "Maison Wellness Website Page Design", image: require('../Assets/maison 1.png'), link: "#" },
    { id: 3, category: "App Design", title: "Bloompay App Design", image: require('../Assets/Bloom 1.png'), link: "#" },
    { id: 4, category: "Landing Page Design", title: "Furniture Store Landing Page Design", image: require('../Assets/Group 74 2.png'), link: "#" },
    { id: 5, category: "App Design", title: "Agropaddy App Design", image: require('../Assets/agroo 1.png'), link: "", status: "In Progress" },
    { id: 6, category: "Web Design", title: "Food Case Study Website Design", image: require('../Assets/foodcasestudy 1.png'), link: "#" },
    { id: 7, category: "Web Design", title: "Python Website Design", image: require('../Assets/pythons 1.png'), link: "#" },
    { id: 8, category: "Web Design", title: "AgroVest Web Design", image: require('../Assets/agro 1.png'), link: "#" },
    { id: 9, category: "Web Design", title: "Dokita Website Design", image: require('../Assets/dokita 2.png'), link: "#" },
    { id: 10, category: "App Design", title: "Expense Tracker Design", image: require('../Assets/Group 1000002782.png'), link: "#" },
];

const ProjectScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
    }, [pathname]);

    return (
        <div>
            <header className='header2'>
                <nav>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                </nav>
            </header>

            <div className='projects all-projects'>
                <div className="top-txt">
                    <h2>My <span>Projects</span></h2>
                    <p>I lead design projects at Harvoxx Tech Hub, where I strive to improve user engagement and satisfaction.</p>
                </div>

                <div className="proj">
                    <div className="first p-f">
                        {projects.map((project, index) => (
                            <motion.div 
                                className="pp-f" 
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}
                            >
                                <div className="p-cards">
                                    <img src={project.image} alt={project.title} />
                                    <div className="cont">
                                        <div>
                                            <h4>{project.category}</h4>
                                            <h3>{project.title}</h3>
                                        </div>
                                        {project.status ? (
                                            <motion.button 
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {project.status}
                                            </motion.button>
                                        ) : (
                                            <motion.a href={project.link}>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    View Project
                                                </motion.button>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default ProjectScreen;
