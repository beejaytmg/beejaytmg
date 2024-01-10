// src/App.jsx
import React from 'react';
import Header from './components/header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;
