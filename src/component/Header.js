import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
      <div className="container-fluid">
        <img src={logo} alt="Company Logo" className="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/about"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/services"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/products"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/global-network"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Global Network
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/sustainability"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Sustainability
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/careers"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/contact"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
