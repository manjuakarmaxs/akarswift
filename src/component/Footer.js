import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import   { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="text-light py-5 " style={{background:'#CD7F32'}}>
      <div className="container">
        <div className="row">
       
          <div className="col-md-4 mb-4">
            <h5>Akarswift Global</h5>
            <p>Leading the future of global trade with innovative solutions and sustainable practices.</p>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <Link className="nav-link" to="about" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >About Us</Link>
            <Link className="nav-link" to="service" spy={true}  activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >Services</Link>
            <Link className="nav-link" to="products"  spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >Products</Link>
            <Link className="nav-link" to="careers" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >Careers</Link>
            <Link className="nav-link" to="contact" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >Contact Us</Link>
            </ul>
          </div>

         
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
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
            </ul>
            <div className="d-flex">
              <a href="#" className="text-light me-3"><FaFacebookF /></a>
              <a href="#" className="text-light me-3"><FaTwitter /></a>
              <a href="#" className="text-light me-3"><FaLinkedinIn /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Akarswift Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
