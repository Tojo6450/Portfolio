import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import StickyNav from './components/StickyNav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CTA from './components/CTA';
import ThemeToggle from './components/ThemeToggle';
import CodingProfilesGrid from './components/CodingProfile';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div id="content" className={`app`}>
                {!isMobile && theme === 'dark' }
                {!isMobile && theme === 'light'}
                <StickyNav isMobile={isMobile} />
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} isMobile={isMobile}/>
                <main>
                  <motion.section
                    className="hero"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Hero theme={theme} />
                  </motion.section>
                  <motion.section
                    className="projects"
                    id="projects"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <Projects theme={theme} />
                  </motion.section>
                  <motion.section
                    className="skills"
                    id="skills"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Skills theme={theme} />
                  </motion.section>
                  <motion.section
                    className="Acievement"
                    id="DSA & CP Acheivmemt"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <CodingProfilesGrid theme={theme}/>
                  </motion.section>
                  <motion.section
                    className="cta-section"
                    id="CTA"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                      <CTA />
                  </motion.section>
                </main>
              </div>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
