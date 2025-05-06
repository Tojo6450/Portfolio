import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CTA.css';

const CTASection = () => {
    return (
        <>
            <h2>Ready to take your project to the next level?</h2>
            <p>Let's work together to build something amazing. Reach out today!</p>
            <div className="cta-buttons">
             <a href="tel:+918167335720" className="cta-btn">
            <img className='icon' src="/phon.png" alt="Phone Icon" />+91 8167335720    
              </a>
                <a href="mailto:ghoruisupriyo409@gmail.com" className="cta-btn">
                    <img className='icon' src="/email.png" alt="Email Icon" />ghoruisupriyo409@gmail.com
                </a>
                <a href="https://github.com/Tojo6450" className="cta-btn secondary">
                    <img className='icon' src="/logos/github.svg" alt="GitHub Icon" />GitHub
                </a>
                <a href="https://www.linkedin.com/in/supriyo-ghorui-17929524b/" className='cta-btn linkedin'>
                    <img className='icon' src="/logos/LinkedIn.png" alt="LinkedIn Icon" />LinkedIn
                </a>
            </div>

            
        </>
    );
};

export default CTASection;
