import React from 'react';
import './index.css';
import vlogo from '../vlogo.jpg'; // Import the vlogo
import slogo from '../slogo.png'; // Import the slogo

function Biography() {
  return (
    <div className="biography">
      <h2>Education</h2>
      
      <div className="content">
        <ul>
          <li className="list-item">
            <img src={vlogo} alt="V Logo" className="logo" /><br />
            <strong>Bachelor of Science in Computer Science and Engineering</strong><br />
            University of Dhaka, 2021 - Present
          </li>
          <br />
          <li className="list-item">
            <img src={slogo} alt="S Logo" className="logo" /><br />
            <strong>Higher Secondary School</strong><br />
            Viqarunnisa Noon School and College, 2019 - 2021
          </li>
          <br />
          <li>
            <a href="https://drive.google.com/file/d/1TSpipx2ic2q27iNROcfbbs6v0yDfO3xf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              View My CV
            </a>
          </li>
        </ul>
        <img className="img" src="https://media.tenor.com/bDINMYR_xqEAAAAM/studying-dying.gif" alt="Biography Animation" />
      </div>
    </div>
  );
}

export default Biography;
