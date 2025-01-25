
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/ideaform">Share Ideas</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/whatsnew">What's New</Link></li>
        <li><Link to="/interactivedemo">Interactive Demos</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Header;