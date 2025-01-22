import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="menu">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </ul>
  </nav>
);

export default Menu;
