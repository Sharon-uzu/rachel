import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Service from '../Components/Service';
import Why from '../Components/Why';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Testimonial from '../Components/Testimonial';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  return (
    <div className='home'>
      <Header />
      
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Service />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Why />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Projects />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Testimonial />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
