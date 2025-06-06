import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../styles/StickyNav.css'

const StickyNav = ({ isMobile }) => {
    return (
        <nav className="sticky-nav">
            {!isMobile && <Link to="/"><img className='logo' src="/OIP.svg" alt="logo" /></Link>}
            <ul>
                <li>
                    <HashLink smooth to="/#projects">Projects</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#skills">TechStack</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#DSA & CP Acheivmemt">CodingProfile</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#CTA">Contact</HashLink>
                </li>
            </ul>
        </nav>
    );
};

export default StickyNav;
