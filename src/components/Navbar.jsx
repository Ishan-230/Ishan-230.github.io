// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);
  // State to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <div className="nav-logo">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="logo-link"
            onClick={closeMobileMenu} // Close menu if logo is clicked
          >
            Ishan Joshi
          </Link>
        </div>

        {/* Mobile Menu Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {/* This creates the 'X' or 'hamburger' based on state */}
          <div className={isOpen ? 'icon-line line-1' : 'icon-line'}></div>
          <div className={isOpen ? 'icon-line line-2' : 'icon-line'}></div>
          <div className={isOpen ? 'icon-line line-3' : 'icon-line'}></div>
        </div>

        {/* Navigation Menu List */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="achievements" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
              Achievements
            </Link>
          </li>

          {/* New Resume Button */}
          <li className="nav-item nav-item-btn">
            <a 
              href="/Resume.pdf" // Make sure 'Resume.pdf' is in your /public folder
              download="Ishan-Joshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>

          {/* Updated Contact Button */}
          <li className="nav-item nav-item-btn">
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-contact-btn"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;