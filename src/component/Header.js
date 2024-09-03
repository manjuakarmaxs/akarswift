import React from 'react';
import logo from '../assets/logo.jpg';
// import Marque1 from './Marque1';
import { Link } from 'react-scroll'; // Install react-scroll for smooth scrolling
import './Header.css'

const Header = () => {
  return (
    <> 
  <nav className="navbar navbar-expand-lg navbar-dark " style={{ background: 'black', fontWeight: 'bold' }}>    
  <div className="container-fluid">
    <img src={logo} alt="Company Logo" className="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="about" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Us</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="service" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="products" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Products</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="global-network" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Global Network</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="sustainability" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Sustainability</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="careers" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Careers</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link navbar-brand" to="contact" spy={true} activeClass="active" offset={-70} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
