// src/components/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css'; // We'll create this next

// --- NEW DATA STRUCTURE ---
const researchPapers = [
  {
    title: "Advanced Security Control Monitoring and Auditing in Cloud Computing",
    description: "Award-winning paper (ICIASET 2025) integrating AI and blockchain in audit processes.",
    link: null // Placeholder for future link
  },
  {
    title: "Adaptive Cyber Threat Detection in Cloud Environments Using Reinforcement Learning",
    description: "Explores reinforcement learning models for dynamic, real-time threat detection in cloud infrastructures.",
    link: null // Placeholder for future link
  }
];

const simulations = [
  {
    title: "Deloitte Australia Cyber Job Simulation",
    date: "July 2025",
    description: "Analyzed web activity logs to identify suspicious user activity."
  },
  {
    title: "Tata Cybersecurity Security Analyst Simulation",
    date: "October 2024",
    description: "Completed simulation on Identity & Access Management (IAM) principles."
  }
];

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google (via Coursera)"
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google (via Coursera)"
  }
];
// --- END OF DATA ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <h2>Achievements & Certifications</h2>
      
      <motion.div 
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* --- 1. Research Papers --- */}
        <motion.div variants={itemVariants} className="achievement-category">
          <h3 className="category-title">Research Papers</h3>
          <div className="category-grid">
            {researchPapers.map((paper) => (
              <div key={paper.title} className="achievement-card paper-card">
                <h4>{paper.title}</h4>
                <p>{paper.description}</p>
                {/* // Uncomment this block when you have a link
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
                  Read Paper (Coming Soon)
                </a> 
                */}
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- 2. Simulations --- */}
        <motion.div variants={itemVariants} className="achievement-category">
          <h3 className="category-title">Virtual Job Simulations (Forage)</h3>
          <div className="category-grid">
            {simulations.map((sim) => (
              <div key={sim.title} className="achievement-card sim-card">
                <span className="card-date">{sim.date}</span>
                <h4>{sim.title}</h4>
                <p>{sim.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- 3. Certifications --- */}
        <motion.div variants={itemVariants} className="achievement-category">
          <h3 className="category-title">Certifications</h3>
          <div className="category-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="achievement-card cert-card">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                {/* // Uncomment this block when you have a link
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Credential
                </a> 
                */}
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Achievements;