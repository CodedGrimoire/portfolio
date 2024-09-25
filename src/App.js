import React, { useState, useEffect } from 'react';
import './App.css'; // Your main styles
import background from './background.gif';
import Sidebar from './Sidebar/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Biography from './Biography';
import Expertise from './Expertise';
import Projects from './Projects';
import Contact from './Contact';
import Homepage from './Homepage';
import Loader from './Loader'; // Import your Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading
    }, 1); // Adjust as needed
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Sidebar />
        <div className="content">
          {loading ? (
            <Loader /> // Show loader while loading
          ) : (
            <Routes>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
