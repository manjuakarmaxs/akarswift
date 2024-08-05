import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Sustainability.css'

const Sustainability = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Sustainability</h2>
      <p className="text-center mb-4"><b>Commitment to a Greener Future</b></p>
      <div className="row">
        <div className="col-md-6">
          <div className="sustainability-item">
            <div className="sustainability-icon">
              <i className="bi bi-recycle"></i> {/* Bootstrap Icons */}
            </div>
            <div className="sustainability-content">
              <h5>Eco-friendly Packaging</h5>
              <p>Utilizing biodegradable and recyclable materials to reduce waste and environmental impact.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="sustainability-item">
            <div className="sustainability-icon">
              <i className="bi bi-truck"></i> {/* Bootstrap Icons */}
            </div>
            <div className="sustainability-content">
              <h5>Green Logistics</h5>
              <p>Implementing energy-efficient transportation methods to cut down carbon emissions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="sustainability-item">
            <div className="sustainability-icon">
              <i className="bi bi-plant"></i> {/* Bootstrap Icons */}
            </div>
            <div className="sustainability-content">
              <h5>Sustainable Sourcing</h5>
              <p>Ensuring that our products are sourced from environmentally responsible suppliers.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="sustainability-item">
            <div className="sustainability-icon">
              <i className="bi bi-cloud-sun"></i> {/* Bootstrap Icons */}
            </div>
            <div className="sustainability-content">
              <h5>Carbon Footprint Reduction</h5>
              <p>Investing in technologies and practices that minimize our carbon emissions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
