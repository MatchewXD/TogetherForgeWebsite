import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <p>© 2025 Twitchy Games. All Rights Reserved.</p>
      <nav>
        <a href="#privacy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
        <a href="#terms" style={{ color: '#fff', margin: '0 10px' }}>Terms of Use</a>
        <a href="#contact" style={{ color: '#fff', margin: '0 10px' }}>Contact Us</a>
      </nav>
    </footer>
  );
}

export default Footer;
