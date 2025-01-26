import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaTwitch, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-tagline">By the Community, For the Community.</p>
        <ul className="footer-links">
          <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          <li><Link to="/terms" className="footer-link">Terms of Use</Link></li>
          <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          <li><Link to="/faq" className="footer-link">FAQ</Link></li>
        </ul>
        <div className="footer-social">
          <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitch />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
        <p>&copy; 2025 Twitchy Games. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
