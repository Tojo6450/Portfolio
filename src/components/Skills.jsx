import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skills = ['React', 
                'JavaScript', 
                'CSS3', 
                'MongoDB', 
                'SQL', 
                'NodeJS',
                'Express',
                'Github',
                'Cpp',
                'Java',
                'Python',
                'C',
              ];

const logos = {
  React: '/logos/react.svg',
  JavaScript: '/logos/js.svg',
  CSS3: '/logos/css3.svg',
  MongoDB: '/logos/mongodb.svg',
  SQL: '/logos/sql.svg',
  NodeJS: '/logos/nodejs.svg',
  Express: '/logos/express.svg',
  Github: '/logos/github.svg',
  Cpp:'/logos/cpp.svg',
  Java:'/logos/java.svg',
  Python:'/logos/python.svg',
  C:'/logos/c..svg',
};

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const waveVariants = {
    hidden: { scale: 0.8 },
    visible: {
      scale: [1.2, 0.9, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

function Skills({theme}) {
  return (
    <>
      <div className='skills-header'>
        <h1>My Tech Stack</h1>
        <blockquote>
          <q>Everybody should learn how to program a computer,
            because it teaches you how to think. </q>
          <cite> - Steve Jobs</cite>
        </blockquote>
        <p>I am committed to learning new technologies that are best for the task at hand.</p>
      </div>
      <motion.div
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
         {skills.map((skill) => (
          <motion.div
            key={skill}
            className={`skill-item ${theme==='light'?'lights' :' '}`}
            variants={waveVariants}
          >
            <img src={logos[skill]} alt={skill} className="skill-logo" />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
