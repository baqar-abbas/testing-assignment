/* eslint-disable */
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../media-queries/navbar.css';

const Navbar = () => (
  <header>
    <nav className="nav-bar">
      <div className="logo">BOOKSTORE CMS</div>
      <ul>
        <li><NavLink to="/">Books</NavLink></li>
        <li><NavLink to="/Categories">Categories</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Crud">Crud Demo</NavLink></li>
      </ul>
      <div className="oval">
        <FaUser className="user-oval" />
      </div>
    </nav>
  </header>
);

export default Navbar;
