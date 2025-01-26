import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header-container">
      <div className="header-logo">
        <Link to="/">Twitchy Games</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/community" className="nav-link">Community</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/ideaform" className="nav-link">Share Ideas</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/faq" className="nav-link">FAQ</Link></li>
        <li><Link to="/whatsnew" className="nav-link">What's New</Link></li>
        <li><Link to="/interactivedemo" className="nav-link">Interactive Demos</Link></li>
        <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
