// src/components/AboutMe.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bijay from './images/bijay.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-600 text-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-8 p-5">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hello, I'm Bijaya Kumar Tamang, a passionate web developer based in Birtamode-9, Jhapa, Nepal. With a strong foundation in both frontend and backend development, I specialize in creating dynamic and interactive web applications. I have knowledge and skills in React, Django, and Python.
          </p>
          <p>
            Explore more about me in other sections:
            <br />
            <Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>
            {' | '}
            <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={bijay}  // Replace with the actual image URL
            alt="Bijaya Kumar Tamang"
            className="rounded-md shadow-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
