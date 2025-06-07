import React, { useState, useEffect } from "react";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";
import projectsData from "../data/projectsData";
import "../styles/Projects.css";

function Projects({theme}) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div className={`projects-container ${theme=='dark'? '' : 'lights'}`}>
      <div className="projects-wrapper">
        <h2 className={`projects-heading ${theme=='dark' ? '':'lght-theme'}`}>Projects</h2>

        <div className={isMobile ? "projects-mobile-layout" : "projects-grid-layout"}>
          {visibleProjects.map((project, index) => (
            <div className={`project-card ${theme==='dark' ? '':'lght'}`} key={index}>
              <div className="project-info">
                <h3 className={`project-title ${theme==='dark' ? '':'lght-theme'}`}>
                  {project.title}
                  {project.status && <span className={`project-status ${project.status === "● Building" ? "building" : ""}`}>
                      {project.status}
                    </span> }
                </h3>
                <p className={`project-desc ${theme==='dark' ? '':'lght-theme'}`}>{project.description}</p>
              </div>
             <div className="project-icons">
  {project.status === "● Running" && (
    <a
      href={project.links.live}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-icons a ${theme === "light" ? "light-mode" : ""}`}
    >
      <FaLink />
    </a>
  )}
  <a
    href={project.links.github}
    target="_blank"
    rel="noopener noreferrer"
    className={`project-icons a ${theme === "light" ? "light-mode" : ""}`}
  >
    <FaGithub />
  </a>
</div>

            </div>
          ))}
        </div>

        <button className="see-more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "Show All Projects"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
