import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "Budget-Expense Tracker",
    screenshots: ["/projects/Budget-Expense.png"],
    description: "A simple budgeting tool to manage and track category-wise expenses.",
    features: [
      "Create/update budgets",
      "Category-wise expense tracking",
      "Real-time visual insights",
    ],
    liveLink: "https://budget-expense-tracker-app.vercel.app/",
    githubLink: "https://github.com/Tojo6450/Budget-Expense-Tracker-App",
  },
  {
    title: "Food-order App",
    screenshots: ["/projects/Food.png"],
    description: "A responsive food ordering platform with real-time cart and order tracking",
    features: [
      "Browse 50+ menu items.",
      "Add to cart and place orders.",
      "Real-time order tracking.",
    ],
    liveLink: "https://food-order-app-phi-ten.vercel.app/",
    githubLink: "https://github.com/Tojo6450/Food-Order-App",
  },
  {
    title: "Encryptor-Decryptor",
    screenshots: ["/projects/Encryptor_decryptor.png"],
    description: "A secure message tool for encrypting and decrypting text using Vigenère Cipher.",
    features: [
      "Encrypt/decrypt messages.",
      "Dual-tab interface.",
      "Symmetric key cryptography.",
    ],
    liveLink: "https://encryptordecryptorapplication.vercel.app/encrypt",
    githubLink: "https://github.com/Tojo6450/Encryptor-Decryptor-Application",
  },
  {
    title: "Weather App",
    screenshots: ["/projects/weather-app.png"],
    description: "A dynamic Weather Update app.",
    features: [
      "Real-time weather updates by location",
      "Forecast with temperature, humidity, and wind.",
      "Search by city name.",
    ],
    githubLink: "https://github.com/Tojo6450/Dynamic-Weather-Update-application",
  },
  {
    title: "Currency convertor",
    screenshots: ["/projects/Currency.png"],
    description: "Real-time exchange rate updates",
    features: [
      "Convert between 150+ currencies",
      "Easy input and instant results",
      "Swap currency option",
    ],
    githubLink: "https://github.com/Tojo6450/Currency-Converter",
  },
  {
    title: "Freelancing page",
    screenshots: ["/projects/free.png"],
    description: "A free-lancing front-page",
    features: [
      "An interective UI?UX application.",
      "Styled with TailwindCSS.",
      "User presence tracking.",
    ],
    githubLink: "https://github.com/Tojo6450/Freelancing-profile",
  },
];

const ProjectItem = ({ project,isMobile,theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className={`project-item ${theme === 'dark'? 'darks':'lights'}`}>
      <h3>{project.title}</h3>
      <div className="carousel">
        {project.screenshots.length > 1 && (
          <button className={`left ${isMobile ? 'mobile' : 'arrow'}`} onClick={prevScreenshot}>
            &lsaquo;
          </button>
        )}
        <motion.div
          className="screenshot"
          key={project.screenshots[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={project.screenshots[currentIndex]} alt="screenshot" />
        </motion.div>
        {project.screenshots.length > 1 && (
          <button   className={`right ${isMobile ? 'mobile' : 'arrow'}`}
          onClick={nextScreenshot}>
            &rsaquo;
          </button>
        )}
      </div>
      <div className="project-overview">
        <p>{project.description}</p>
        <ul>
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="project-buttons">
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="liveview-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live View
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = ({isMobile,theme}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;

  const totalPages = Math.ceil(projectsData.length / perPage);

  const startIdx = currentPage * perPage;
  const visibleProjects = projectsData.slice(startIdx, startIdx + perPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  return (
    <div className="projects">
      <h2 style={{color:"#ffa500"}}>Projects</h2>
      <div className="projects-navigation">
        <button className={`left ${isMobile ? 'mobile' : 'arrow'}`} onClick={prevPage}>⟵</button>
        <div className="projects-list">
          {visibleProjects.map((project, idx) => (
            <ProjectItem key={idx} project={project} isMobile={isMobile} theme={theme} />
          ))}
        </div>
        <button className={`right ${isMobile ? 'mobile' : 'arrow'}`} onClick={nextPage}>⟶</button>
      </div>
    </div>
  );
};

export default Projects;
