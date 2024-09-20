import React from 'react';
import './index.css'; // Import CSS for styling
import logo from './logo.png'; // Import the logo image

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
