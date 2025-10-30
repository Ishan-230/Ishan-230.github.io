// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';

const Navbar = () => {
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls past 100px, false otherwise
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-logo">
          {/* This link will scroll to the top 'hero' section */}
          <Link to="hero" spy={true} smooth={true} duration={500} className="logo-link">
            Ishan Joshi
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            {/* Each Link points to the 'id' of one of your sections */}
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={500}>
              Journey
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="nav-contact-btn">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;