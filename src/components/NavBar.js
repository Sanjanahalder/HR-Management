// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/work-information">Work Information</Link>
        </li>
        <li>
          <Link to="/private-information">Private Information</Link>
        </li>
        <li>
          <Link to="/hr-settings">HR Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
