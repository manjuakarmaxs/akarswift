import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/About.css';

import ourstory from '../assets/ourstory.jpg';
import vision from '../assets/vision.jpg'
import corevalues from '../assets/corevalues.jpg'
import mission from '../assets/mission.png'


const About = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner container">
        <div className="carousel-item active">
          <div className="d-flex align-items-center">
            <img src={ourstory} className="d-block w-50" alt="Our Story" />
            <div className="w-50 p-4 text-right text-container">
              <h1 className="card-title">Our Story</h1>
              <h3 className="card-text">
                Founded under the robust legal framework of Karnataka, India, Akarswift Global Pvt Ltd stands as a beacon of trust and efficiency in the realm of international trade. With a vision to connect the world through seamless trade, we have built a legacy of reliability, integrity, and innovation.
              </h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex align-items-center">
            <img src={vision} className="d-block w-50" alt="Our Vision" />
            <div className="w-50 p-4 text-right text-container">
              <h1 className="card-title">Our Vision</h1>
              <h3 className="card-text">
                To be the foremost global trading partner, known for our commitment to excellence and sustainability.
              </h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex align-items-center">
            <img src={mission} className="d-block w-50" alt="Our Mission" />
            <div className="w-50 p-4 text-right text-container">
              <h1 className="card-title">Our Mission</h1>
              <h3 className="card-text">
                To facilitate global trade by providing exceptional import and export services that exceed our clients' expectations.
              </h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex align-items-center">
            <img src={corevalues} className="d-block w-50" alt="Core Values" />
            <div className="w-50 p-4 text-right text-container">
              <h1 className="card-title">Core Values</h1>
              <h3 className="card-text">
                - Integrity: Upholding the highest standards of honesty and fairness.<br />
                - Excellence: Striving for perfection in every transaction.<br />
                - Sustainability: Promoting eco-friendly practices in global trade.<br />
                - Innovation: Continuously evolving to meet the dynamic needs of the global market.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default About;
