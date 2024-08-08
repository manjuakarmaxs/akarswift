import React from 'react';
import videoSrc from '../assets/landing2.mp4'; // Replace with your video file path
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Home.css';

const Home = () => {
  return (
    <>
      <div className="relative-container">
        <video autoPlay muted loop className="video-background">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <section className="mission">
           <center> <h3>Welcome to Akarswift Global Pvt Ltd</h3></center>
            <p><strong>
              At Akarswift Global Pvt Ltd, we bridge continents and cultures by importing and exporting a diverse range of goods across the globe.
              Our unwavering commitment to excellence, innovation, and sustainability ensures that we deliver unparalleled value to our partners and clients.
              Discover a world without borders with Akarswift Global.</strong>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
