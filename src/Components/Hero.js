import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero from '../Assets/hero.png';

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
};

const Hero = () => {
  return (
    <div className='hero' id='aboutme'>
      <motion.div className="h-txt" initial="hidden" animate="visible" variants={textVariants}>
        <h3>Product Designer</h3>
        <h2>Hello, I am Racheal Obereniokuma</h2>
        <p>
          A Product Designer with over two years of experience creating intuitive, user-focused digital products. My work spans the full design process, from research to prototyping, with a focus on balancing functionality and aesthetics. I’m passionate about using design to dri transform ideas into seamless digital experiences that engage and delight users.       
        </p>
        <a href="#contacts">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Hire me
          </motion.button>
        </a>
      </motion.div>

      <motion.div className="h-img" initial="hidden" animate="visible" variants={imageVariants}>
        <img src={hero} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
