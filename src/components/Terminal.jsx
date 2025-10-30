// src/components/Terminal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll'; // Import scroller for imperative scrolling
import './Terminal.css';
import { motion } from 'framer-motion'; // <-- **I'm also adding this import, it was missing!**

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Ishan's terminal. Type 'help' for commands." }
  ]);
  const [command, setCommand] = useState('');
  
  const inputRef = useRef(null);
  const historyRef = useRef(null);

  // --- Command Definitions ---
  const commands = {
    'help': () => "Available commands:\n" +
                 "- 'about'    : Scroll to About Me\n" +
                 "- 'skills'   : Scroll to Skills\n" +
                 "- 'journey'  : Scroll to My Journey\n" +
                 "- 'projects' : Scroll to Projects\n" +
                 "- 'achievements' : Scroll to Achievements\n" +
                 "- 'contact'  : Scroll to Contact\n" +
                 "- 'social'   : Show social links\n" +
                 "- 'clear'    : Clear terminal history\n" +
                 "- 'close'    : Close this terminal",
    'about': () => {
      scrollToSection('about');
      return "Scrolling to 'About Me'...";
    },
    'skills': () => {
      scrollToSection('skills');
      return "Scrolling to 'Skills'...";
    },
    'journey': () => {
      scrollToSection('experience'); 
      return "Scrolling to 'Education'..."; // 2. Update text
    },
    'experience': () => { // Alias for journey
      scrollToSection('experience');
      return "Scrolling to 'Education'..."; // 3. Update text
    },
    'projects': () => {
      scrollToSection('projects');
      return "Scrolling to 'Projects'...";
    },
    'achievements': () => {
      scrollToSection('achievements');
      return "Scrolling to 'Achievements & Simulations'...";
    },
    'contact': () => {
      scrollToSection('contact');
      return "Scrolling to 'Contact'...";
    },
    'social': () => "GitHub: github.com/Ishan-230\n" +
                     "LinkedIn: linkedin.com/in/ishan-joshi-3351a1288",
    'clear': () => {
      setHistory([]); // Clear history, but don't return text
      return null;
    },
    'close': () => {
      setIsOpen(false);
      return "Closing terminal...";
    }
  };

  // --- Helper Functions ---
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80 // Match navbar offset
    });
    setIsOpen(false); // Close terminal after scrolling
  };

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!command) return;

    const cmd = command.toLowerCase().trim();
    const output = commands[cmd] ? commands[cmd]() : `Command not found: ${cmd}`;

    const newHistory = [...history, { type: 'input', text: command }];
    if (output) {
      newHistory.push({ type: 'output', text: output });
    }
    
    setHistory(newHistory);
    setCommand('');
  };

  // --- Effects ---
  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Auto-scroll history to bottom
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);


  return (
    <div className="terminal-widget">
      {/* --- The Terminal Window (when open) --- */}
      <motion.div 
        className="terminal-window"
        initial={{ y: "110%" }}
        animate={{ y: isOpen ? 0 : "110%" }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        <div className="terminal-header">
          <span>ishan-joshi-terminal</span>
          <button onClick={() => setIsOpen(false)} className="terminal-close-btn">_</button>
        </div>
        
        <div className="terminal-history" ref={historyRef}>
          {history.map((line, index) => (
            <div key={index} className={`history-line ${line.type}`}>
              {line.type === 'input' && <span className="prompt"></span>}
              <pre>{line.text}</pre> {/* <pre> preserves whitespace */}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleCommandSubmit} className="terminal-input-form">
          <span className="prompt"></span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={command}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </form>
      </motion.div>
      
      {/* --- The Toggle Button (when closed) --- */}
      <motion.button 
        className="terminal-toggle-btn"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }} // Delay to load after page
        whileHover={{ scale: 1.1 }}
      >
        {/* Simple Terminal Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Terminal;