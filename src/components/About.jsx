// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profileImg from '../assets/profile-img.jpg'; // Import your profile image

// Animation for the image (fades in from the left)
const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Animation for the text (fades in from the right)
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        
        {/* Column 1: Image */}
        <motion.div 
          className="about-image"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={profileImg} alt="Ishan Joshi" />
        </motion.div>
        
        {/* Column 2: Text Content */}
        <motion.div 
          className="about-text"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* --- UPDATED --- */}
          <h3>Developer | Cloud | Cybersecurity | AI/ML</h3>
          
          {/* --- UPDATED --- */}
          <p className="profile-summary">
            A motivated and proactive Developer and Computer Application student. 
            My core passions are Cloud Computing, Cybersecurity, AI/ML, and building
            robust, real-world applications.
          </p>
          
          {/* --- UPDATED --- */}
          <p>
            With strong problem-solving skills, I enjoy automating infrastructure, 
            enhancing security protocols, and applying AI to complex challenges. 
            Proficient in Python, Java, C/C++, and Bash.
          </p>
          
          {/* --- UPDATED --- */}
          <div className="about-highlights">
            <div className="highlight-item">
              <strong>Core Focus:</strong> Dev, Cloud, Security, & AI
            </div>
            <div className="highlight-item">
              <strong>Languages:</strong> Python, Java, C/C++, Bash
            </div>
          </div>
          
          <a href="#contact" className="cta-button">
            Let's Talk
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;