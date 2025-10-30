// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; // This file does not need to change

// --- UPDATED SKILL CATEGORIES ---
// Re-organized to match your four pillars
const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      "Python", 
      "Java", 
      "C/C++", 
      "Bash", 
      "Problem Solving", 
      "Logical Thinking"
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Prompt Engineering", // Added
      "Jupyter Notebooks",  // Moved & Confirmed 
      "Data Visualization"    // From Resume 
    ]
  },
  {
    title: "Cloud & Cybersecurity",
    skills: [
      "AWS EC2",            // From Resume 
      "IAM",                // From Resume 
      "Linux",              // From Resume 
      "Network Protocols",  // From Resume 
      "Wireshark"           // From Resume 
    ]
  },
  {
    title: "Development & Tools",
    skills: [
      "Django",             // Added
      "Firebase",           // Added
      "MySQL",              // From Resume 
      "HTML & CSS",         // From Resume 
      "GitHub",             // From Resume 
      "VS Code"             // From Resume 
    ]
  }
];

// Animation for the container (staggers the children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Each child fades in 0.1s after the previous one
  }
};

// Animation for each skill card
const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2>My Technical Skills</h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when this grid scrolls into view
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.title} 
            className="skill-category"
            variants={skillVariants} // Each category card animates in
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;