import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-media-links">
          {/* Font Awesome Facebook icon */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          {/* Font Awesome Twitter icon */}
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          {/* Add more social media links/icons as needed */}
        </div>
        <div className="logo">
          {/* Add your company logo here */}
          <img src="/src/assets/logo.png" alt="Company Logo" />
        </div>
      </div>
      <div className="footer-right">
        <p>&copy; {new Date().getFullYear()} Make My Trip Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
