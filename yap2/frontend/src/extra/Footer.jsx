import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <Image src={logo} /> */}
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: mannan.puri0052@gmail.com</p>
          <p>Phone: +91 9418125036</p>
          <p>Address: Una, Himachal Pradesh</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>

          {/* Correct way to use <Link> without <a> */}
          <Link to="/about-me">About Us</Link>
          <Link to="/contact-us">Contact</Link>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cloud Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
