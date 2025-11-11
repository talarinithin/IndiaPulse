import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>📰 IndiaPulse</h3>
          <p>Your daily source for India news</p>
          <p className="founder-text">Founded by Talari Nithin</p>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="/">Headlines</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">Technology</a></li>
            <li><a href="/">Business</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>States</h4>
          <ul>
            <li><a href="/">Karnataka</a></li>
            <li><a href="/">Maharashtra</a></li>
            <li><a href="/">Delhi</a></li>
            <li><a href="/">Tamil Nadu</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="mailto:talarinithin0@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="mailto:talarinithin0@gmail.com">Contact</a>
          </div>
          <p className="contact-email">📧 talarinithin0@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 IndiaPulse News. All rights reserved.</p>
        <p className="footer-credit">Built with ❤️ by Talari Nithin</p>
      </div>
    </footer>
  );
};

export default Footer;
