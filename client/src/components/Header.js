import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="header-container">
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>Twitchy Games</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/community" className="nav-link" onClick={closeMenu}>Community</Link></li>
        <li><Link to="/dashboard" className="nav-link" onClick={closeMenu}>Dashboard</Link></li>
        <li><Link to="/ideaform" className="nav-link" onClick={closeMenu}>Share Ideas</Link></li>
        <li><Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link></li>
        <li><Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link></li>
        <li><Link to="/whatsnew" className="nav-link" onClick={closeMenu}>What's New</Link></li>
        <li><Link to="/interactivedemo" className="nav-link" onClick={closeMenu}>Interactive Demos</Link></li>
        <li><Link to="/feedback" className="nav-link" onClick={closeMenu}>Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
