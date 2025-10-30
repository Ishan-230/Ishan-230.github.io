// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // This file does not need to change

// --- UPDATED: Now only contains education ---
const timelineData = [
  {
    type: "Education",
    date: "July 2023 - July 2026",
    title: "Bachelor of Computer Applications (BCA), Honors in Data Science",
    subtitle: "Jagran Lakecity University, Bhopal, MP",
    details: [
      "CGPA: 8.6",
      "Relevant Coursework: Operating Systems, Networking, Cloud Infrastructure, System Security, Linux Fundamentals, Data Structures."
    ]
  },
  {
    type: "Education",
    date: "2011 - 2023",
    title: "Senior & Secondary Education",
    subtitle: "St. Mary’s Convent School, Bhopal, MP",
    details: [
      "Senior Secondary (Class 12th) - 66%",
      "Secondary (Class 10th) - 80%"
    ]
  }
];

// Animation for the timeline items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <h2>My Education</h2> {/* --- UPDATED TITLE --- */}
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animate each item as it appears
          >
            <div className="timeline-content">
              <span className={`timeline-tag ${item.type.toLowerCase()}`}>{item.type}</span>
              <time>{item.date}</time>
              <h4>{item.title}</h4>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;