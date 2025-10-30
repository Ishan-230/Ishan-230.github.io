// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg'; // Import your hero image
import './Hero.css';

// Animation settings for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" /> {/* This darkens the image */}

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Ishan Joshi</motion.h1>

        {/* --- THIS IS THE UPDATED PART --- */}
        <motion.p variants={itemVariants} className="hero-subtitle">
          "Jack of all trades, master of none, but oftentimes better than a master of one"
        </motion.p>
        {/* --- END OF UPDATE --- */}

        <motion.div variants={itemVariants} className="social-links">
          <a href="https://github.com/Ishan-230" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ishan-joshi-3351a1288" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;