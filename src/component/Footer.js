import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import   { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    
    <footer className="footer">
    <div className="overlay"></div>
    <div className="footer-content">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Akarswift Global</h5>
            <p>Leading the future of global trade with innovative solutions and sustainable practices.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-links" to="about" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer'}}>About Us</Link></li>
              <li><Link className="footer-links" to="service" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link></li>
              <li><Link className="footer-links" to="products" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Products</Link></li>
              <li><Link className="footer-links" to="careers" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Careers</Link></li>
              <li><Link className="footer-links" to="contact" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://maps.app.goo.gl/UYnzDVZ6C9zKTbPW6" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  Akarswift Global Pvt Ltd
                </a>
              </li>
              <li><i className="bi bi-telephone"></i> Phone: 08026618661</li>
              <li><i className="bi bi-envelope"></i> Email: info@akarmaxs.in</li>
            </ul>
            <div className="d-flex social-icons">
              <a href="#" className="me-3"><FaFacebookF /></a>
              <a href="#" className="me-3"><FaTwitter /></a>
              <a href="#" className="me-3"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="row-divider"></div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Akarswift Global. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
