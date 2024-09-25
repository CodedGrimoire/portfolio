import React from 'react';
import './index.css';
import softwareImage from './software.jpg'; // Replace with your actual image path
import frontendImage from './frontend.png'; // Replace with your actual image path

function Expertise() {
  return (
    <div className="expertise">
      <h1>My Expertise</h1>
      <div className="expertise-container">
        <div className="column">
          <h2>Software Development Skills</h2>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
          <img src={softwareImage} alt="Software Development" />
        </div>
        <div className="column">
          <h2>Front-End Development Expertise</h2>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            
           
            {/* Add more front-end skills if needed */}
          </ul>
          <img src={frontendImage} alt="Front-End Development" />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
