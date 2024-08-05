import React from 'react';
import img1 from '../assets/bgimg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Home.css';

const Home = () => {
  return (
    <>
      <div className="container my-5" id="services">
        <div className="greeting">
          <h1>Welcome to Akarswift Global Pvt Ltd</h1>
        </div>
        <div className="relative-container">
          <img src={img1} alt="Company Logo" className="img-fluid" />
          <div className="text-overlay">
            <section className="mission">
              <p>
                At Akarswift Global Pvt Ltd, we bridge continents and cultures by importing and exporting a diverse range of goods across the globe.
                Our unwavering commitment to excellence, innovation, and sustainability ensures that we deliver unparalleled value to our partners and clients.
                Discover a world without borders with Akarswift Global.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
