// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="header container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link to="/about" className="hover:text-gray-300">About Me</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
