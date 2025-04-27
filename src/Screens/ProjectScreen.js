import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/DRAY.png';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';

// Project Data Array
const projects = [
    { id: 1, category: "Web Design", title: "Techpass Africa Website Design", image: require('../Assets/Techpass 1.png'), link: "https://www.techpass.africa/", btn:'View Project' },
    { id: 2, category: "Web Design", title: "Maison Wellness Website Design", image: require('../Assets/maison 1.png'), link: "https://maisomwellness.netlify.app/", btn:'View Project' },
    { id: 2, category: "Web Design", title: "Diaspora Website Design", image: require('../Assets/diaspora.png'), link: "https://adpl-site.netlify.app/", btn:'View Project' },
    { id: 2, category: "Web Design", title: "Nairaland Redesign Website Design", image: require('../Assets/naira.png'), link: "https://www.behance.net/gallery/217924325/Narialand-Redesign", btn:'View Project' },
    { id: 3, category: "App Design", title: "Bloompay App Design", image: require('../Assets/Bloom 1.png'), link: "https://www.mybloompay.com/", btn:'View Project' },
    { id: 4, category: "Landing Page Design", title: "Furniture Store Landing Page Design", image: require('../Assets/Group 74 2.png'), link: "https://www.behance.net/gallery/213647143/FURNITURE-LANDING-PAGE", btn:'View Project' },
    { id: 5, category: "App Design", title: "Agropaddy App Design", image: require('../Assets/agroo 1.png'), link: "https://www.agropaddy.com/?fbclid=IwY2xjawJJDY9leHRuA2FlbQIxMAABHT075hEtEJcJV38FqK9DeHjwm0wqVaDdG97Pi7ZYAv2WwcIsQmOswKQfoQ_aem_k2BjPe5u1d2Nx6qcSU1hag", btn:'View Project' },
    { id: 6, category: "Web Design", title: "Food Case Study Website Design", image: require('../Assets/foodcasestudy 1.png'), link: "https://www.behance.net/gallery/207157781/FOOD-WEB-CASE-STUDY", btn:'View Project' },
    { id: 7, category: "Web Design", title: "Python Website Design", image: require('../Assets/pythons 1.png'), link: "https://python-cave22.netlify.app/", btn:'View Project' },
    { id: 8, category: "Web Design", title: "AgroVest Web Design", image: require('../Assets/agro 1.png'), link: "#", btn:'In Progress' },
    { id: 9, category: "Web Design", title: "Dokita Website Design", image: require('../Assets/dokita 2.png'), link: "#", btn:'In Progress' },
    { id: 10, category: "App Design", title: "Expense Tracker Design", image: require('../Assets/Group 1000002782.png'), link: "https://www.behance.net/gallery/198007693/Expense-Tracker", btn:'View Project' },
    { id: 11, category: "Web Design", title: "Fruity", image: require('../Assets/fruit.png'), link: "https://www.behance.net/gallery/222871791/Juice-Store-Landing-Page", btn:'View Project' },
    { id: 12, category: "Dashboard", title: "AI Curate", image: require('../Assets/ai.png'), link: "https://www.behance.net/gallery/213843247/Saas-platform", btn:'View Project' },

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
                    <p>Showcasing a selection of my best work</p>
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
                                                    {project.btn}
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
