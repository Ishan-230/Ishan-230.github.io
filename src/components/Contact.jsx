// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css'; // We'll create this next

// Animation for the form elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    // --- ⚠️ IMPORTANT: REPLACE WITH YOUR KEYS ---
    const SERVICE_ID = 'service_zeeqcdp';
    const TEMPLATE_ID = 'template_97q0v3t';
    const PUBLIC_KEY = 'eoJxqN8LFhLqDGLng';
    // ------------------------------------------

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setIsLoading(false);
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatusMessage('Failed to send message. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <motion.form 
        className="contact-form" 
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }} // Stagger the inputs
      >
        <motion.input
          variants={itemVariants}
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="form-input"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <motion.input
          variants={itemVariants}
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="form-input"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <motion.textarea
          variants={itemVariants}
          name="message"
          placeholder="Your Message"
          className="form-textarea"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <motion.button
          variants={itemVariants}
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </motion.button>

        {statusMessage && (
          <motion.p 
            className={`status-message ${statusMessage.includes('Failed') ? 'error' : 'success'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {statusMessage}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;