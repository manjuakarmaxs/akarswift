import React from 'react';
import logo from '../assets/logo1.png';
import Marque1 from './Marque1';
import { Link } from 'react-scroll'; // Install react-scroll for smooth scrolling

const Header = () => {
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#CD7F32' ,fontWeight: 'bolder'}}>
      <div className="container-fluid">
       
        <img src={logo} alt="Company Logo" className="marquee-logo" />

       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">

          <li className="nav-item mx-3">
          <Link className="navbar-brand" to="home" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }} >Home</Link>
         
          </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="about" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Us</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="service" spy={true}  activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="products"  spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Products</Link>
            </li>
            <li className="nav-item mx-3">
 
              <Link className="nav-link" to="global-network"  spy={true}  activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Global Network</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="sustainability" spy={true}  activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Sustainability</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="careers" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Careers</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="contact" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
