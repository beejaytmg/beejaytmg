// src/components/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams(); // Use useParams to access route parameters
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details using the project ID
    fetch(`https://learnbijay.pythonanywhere.com/api/projects/${id}`)
      .then(response => response.json())
      .then(data => setProject(data))
      .catch(error => console.error('Error fetching project details:', error));
  }, [id]); // Include id in the dependency array

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Source Code:</strong> <a href={project.src_code} target="_blank" rel="noopener noreferrer">View Code</a>
      </p>
      <p>
        <strong>Project Link:</strong> <a href={project.project_link} target="_blank" rel="noopener noreferrer">Visit Project</a>
      </p>
      <img src={project.image_url} alt={project.title} />
    </div>
  );
};

export default ProjectDetail;
