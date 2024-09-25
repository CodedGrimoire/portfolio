import React from 'react';
import ImageSlider from "./imageslider";
import './index.css';

import img1 from './img1.jfif';
import img2 from './img2.jfif';
import img3 from './img3.jfif';
import img4 from './img4.jfif';
import img5 from './img5.jfif';

const slides = [
    { url: img1, title: 'meow' },
    { url: img2, title: 'meow' },
    { url: img3, title: 'meow' },
    { url: img4, title: 'meow' },
    { url: img5, title: 'meow' },
];
  

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="slider">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Projects;
