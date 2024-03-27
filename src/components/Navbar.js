import React from 'react';
import { NavLink } from 'react-router-dom';

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
    </nav>
  </header>
);

export default Navbar;
