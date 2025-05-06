import React, { useMemo } from "react";
import '../styles/Hero.css';
import MyComponent from "./MyComponent";

function Hero({ theme }) {

  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <>
      <div className="static-stars">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{ top: `${star.top}%`, left: `${star.left}%` }}
          />
        ))}
      </div>
      <div className="hero-content">
        <h3 style={{color:"#ffa500"}}>Hi, my name is</h3>
        <h1 className={`hero-h1 ${theme === 'dark' ? 'dark' : 'light'}`}>Supriyo Ghorui.</h1>
        <h1 className="sub-h1">I am a Web developer.</h1>
        <p>
          Driven by a passion for crafting elegant code,
          I continuously push myself to learn, and master new technologies.
          My journey in development is fueled by self-drive, and an insatiable curiosity.
          Also, I love working with a team. I am an empathetic collaborator. I thrive
          on solving challenging problems, and transforming ideas into
          impactful solutions.
        </p>

      </div>
      <MyComponent theme={theme} />
    </>
  );
}

export default Hero;
