import React from 'react';
import './index.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      
      
      <ul>
      <li><Link to="/Homepage"><FontAwesomeIcon icon={faHome} /> Homepage</Link></li>
      <li><Link to="/Biography"><FontAwesomeIcon icon={faUser} /> Biography</Link></li>

       <li><Link to="/expertise"><FontAwesomeIcon icon={faInfoCircle} /> Expertise</Link></li>
        <li><Link to="/projects"><FontAwesomeIcon icon={faBriefcase} /> Projects</Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
        <li>
          <a href="https://github.com/CodedGrimoire" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tazkia-malik-42506129b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
