// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the Django API
    fetch('https://learnbijay.pythonanywhere.com/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gray-600 text-white">
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="container mx-auto flex justify-between items-center">
          {projects.map(project => (
            <div className="h-50 flex rounded-xl bg-gray-700 outline-offset-8 shadow-xl m-3 hover:bg-gray-800">
              <div className="p-5">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="rounded-md shadow-md"
                />
                <p className="text-2xl">{project.title}</p>
                <p>
                  <strong>Source Code:</strong> <a href={project.src_code} target="_blank" rel="noopener noreferrer">View Code</a>
                </p>
                <p>
                  <strong>Project Link:</strong> <a href={project.project_link} target="_blank" rel="noopener noreferrer">Visit Project</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
