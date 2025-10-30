// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; // We'll create this next

// --- Import Project Images ---
// We're importing the images you added to src/assets
// If an image is missing, we'll use 'null' and handle it in the code
import imgPasswordGen from '../assets/password-generator.png';
import imgEncryption from '../assets/image-encryption.png';
import imgTaskManager from '../assets/task-manager.png';

// --- Project Data (Synthesized from Resume & Bootstrap HTML) ---
// You can easily edit this array later with your content changes
const projectsData = [
  {
    title: "Automated Synchronous Backup",
    description: "Shell-based automation for local-to-cloud file sync using rsync, cron jobs, and real-time logging; deployed on AWS EC2.",
    tags: ["Bash", "AWS EC2", "Cron", "Rsync", "Linux"],
    image: null, // No image provided, we'll use a placeholder
    githubLink: "https://github.com/Ishan-230"
  },
  {
    title: "Infectious Disease Prediction",
    description: "Built a regression model to forecast disease trends using time series analysis and visualized results with heatmaps.",
    tags: ["Python", "Machine Learning", "RMSE", "Data Viz"],
    image: null,
    githubLink: "https://github.com/Ishan-230"
  },
  {
    title: "Image Encryption Tool",
    description: "A Python tool for encrypting and decrypting images via pixel manipulation for ethical security demonstrations.",
    tags: ["Python", "Cybersecurity", "CLI"],
    image: imgEncryption, // Use imported image
    githubLink: "https://github.com/Ishan-230" // You can change this link later
  },
  {
    title: "Password Generator (Java)",
    description: "A Java-based CLI tool to generate secure, complex passwords based on user-defined criteria.",
    tags: ["Java", "Cybersecurity", "CLI"],
    image: imgPasswordGen, // Use imported image
    githubLink: "https://github.com/Ishan-230"
  },
  {
    title: "Task Manager Application",
    description: "A Django-based task management tool with user authentication and filtering, deployed with Docker.",
    tags: ["Django", "Python", "Docker", "HTML/CSS"],
    image: imgTaskManager, // Use imported image
    githubLink: "https://github.com/Ishan-230"
  },
  {
    title: "Security Control Monitoring",
    description: "Published award-winning research paper on AI/ML-powered auditing frameworks for cloud environments.",
    tags: ["Research", "AI/ML", "Cloud", "Security"],
    image: null,
    githubLink: "https://github.com/Ishan-230"
  }
];

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// --- The Component ---
const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }} // Hover animation
          >
            <div className="project-image">
              {/* If image exists, show it. If not, show a placeholder. */}
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="image-placeholder">
                  <span>{project.tags[0]}</span> {/* Show first tag */}
                </div>
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                {/* Add a 'Live Demo' link here if you have one */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;