import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaXTwitter, FaLinkedin, FaCode } from "react-icons/fa6";
import '../styles/Hero.css';

const Home = ({theme}) => {
  const [imageLoad, setImageLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="home-containers">
      <div className={isMobile ? "home-mobile-layouts" : "home-desktop-grids"}>
        {/* Profile Card */}
        <div className={isMobile ? "" : "profile-grid-areas"}>
          <div className={`profile-cards ${theme==='light'?'lt' :' '}`}>
            <div className="profile-image-containers">
              {!imageLoad && <div className="image-placeholders"></div>}
              <img
                className="profile-images"
                src="/mypic.jpg"
                alt="Supriyo"
                loading="lazy"
                onLoad={() => setImageLoad(true)}
              />
            </div>

            <h1 className={`profile-names ${theme==='light'?'lt' :' '}`}>Supriyo Ghorui</h1>

            <p className={`profile-roles ${theme==='light'?'lt' :' '}`}>
              I am a Software Developer .
            </p>

            <div className="profile-socials">
                {[
                    {
                      icon: <FaCode />,
                      href: "https://codolio.com/profile/Supriyo",
                      label: "CodingProfile",
                    },
                    {
                      icon: <FaXTwitter />,
                      href: "https://x.com/supriyo4276?t=83z1N3FDjeRcDINJJ9_QQg&s=09",
                      label: "Twitter",
                    },
                    {
                      icon: <FaLinkedin />,
                      href: "https://www.linkedin.com/in/supriyo-ghorui-17929524b/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <FaGithub />,
                      href: "https://github.com/Tojo6450",
                      label: "GitHub",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      className={`social-link ${theme==='light'?'lt' :' '}`}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={isMobile ? "" : "about-grid-areas"}>
          <div className={`about-card ${theme==='light'?'lt' :' '}`}>
            <div className="about-content">
              <p className={`about-greeting ${theme==='light'?'lt' :' '}`}>Hi There!</p>

              <h2 className={`about-heading ${theme==='light'?'lt' :' '}`}>
                I'm Supriyo Ghorui, a Software Developer building seamless,
                user-focused web applications with clean, efficient code.
              </h2>

               <p className={`about-paragraph ${theme==='light'?'lt' :' '}`}>
                I specialize in building high-performance, responsive solutions using modern technologies like{" "}
                <span className={`tech-colored react ${theme==='light'?'lt' :' '}`}>React</span>,{" "}
                <span className="tech-colored next">Next.js</span>,{" "}
                <span className="tech-colored node">Node.js</span>, and{" "}
                <span className="tech-colored ts">JavaScript</span>. My strength lies in blending solid engineering
                principles with thoughtful UI/UX to create intuitive digital experiences.
              </p>

              <div className="availability-section">
                <div className={`availability-status ${theme==='light'?'lt' :' '}`}>
                  <span className="status-indicator" />
                  <p>Available for Internships and full-time opportunities.</p>
                </div>
                <a
              href="https://drive.google.com/file/d/1oBlXAdtpUlxhs6bAcGhVFF0jKP36iXOQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv-button"
            >
              View Resume 
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
