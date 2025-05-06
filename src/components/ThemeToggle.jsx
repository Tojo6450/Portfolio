import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ThemeToggle.css';
import { SunIcon, MoonIcon } from './Icons';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className="toggle-switch">
        <motion.div
          className="toggle-thumb"
          animate={{ x: theme === 'light' ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </div>
    </div>
  );
}

export default ThemeToggle;
