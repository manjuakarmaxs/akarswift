import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Careers.css';

const Careers = () => {
  return (
    <div className="container my-5" style={{color:'white'}}>
      <h2 className="text-center mb-4" >Careers</h2>
      <p className="text-center mb-4"><b>Join Our Team</b></p>
      <div className="row mb-5">
        <div className="col-lg-6 mb-4">
          <h3>Why Work With Us?</h3>
          <div className="panel mb-3 shadow-sm p-3">
            <div className="panel-body d-flex align-items-center">
              <i className="bi bi-briefcase me-3 icon-large"></i>
              <div style={{color:'black'}}>
                <h5>Professional Growth</h5>
                <p>Opportunities for continuous learning and development.</p>
              </div>
            </div>
          </div>
          <div className="panel mb-3 shadow-sm p-3" >
            <div className="panel-body d-flex align-items-center">
              <i className="bi bi-people me-3 icon-large"></i>
              <div style={{color:'black'}}>
                <h5>Dynamic Environment</h5>
                <p>A vibrant and inclusive workplace.</p>
              </div>
            </div>
          </div>
          <div className="panel mb-3 shadow-sm p-3">
            <div className="panel-body d-flex align-items-center">
              <i className="bi bi-globe me-3 icon-large"></i>
              <div style={{color:'black'}}>
                <h5>Global Exposure</h5>
                <p>Work on international projects and build a global network.</p>
              </div>
            </div>
          </div>
          <div className="panel mb-3 shadow-sm p-3">
            <div className="panel-body d-flex align-items-center">
              <i className="bi bi-lightbulb me-3 icon-large"></i>
              <div style={{color:'black'}}>
                <h5>Innovative Culture</h5>
                <p>Be part of a team that values creativity and innovation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h3>Current Openings</h3>
          <div className="timeline" style={{color:'black'}}>
            <div className="timeline-item mb-4 p-4 rounded shadow-sm" >
              <h5>Software Engineer</h5>
              <p>Work on cutting-edge projects and technologies.</p>
            </div>
            <div className="timeline-item mb-4 p-4  rounded shadow-sm">
              <h5>Product Manager</h5>
              <p>Lead product development and strategy.</p>
            </div>
            <div className="timeline-item mb-4 p-4  rounded shadow-sm">
              <h5>Marketing Specialist</h5>
              <p>Drive global marketing campaigns and initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
