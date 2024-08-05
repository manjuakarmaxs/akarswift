import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/About.css'

const About=()=>{

    return (
        // <div className="container" id="trainer">
        //   <h2 className="text-center mb-4">About Us</h2>
        //   <div className="row">
     
        //     <div className="col-md-4 mb-4">
            
        //       <div className="float1 card h-100 ">
        //         <div className="card-body">
        //           <h3 className="card-title">Our Story</h3>
        //           <p className="card-text">
        //             Founded under the robust legal framework of Karnataka, India, Akarswift Global Pvt Ltd stands as a beacon of trust and efficiency in the realm of international trade. With a vision to connect the world through seamless trade, we have built a legacy of reliability, integrity, and innovation.
        //           </p>
        //         </div>
        //       </div>
        //     </div>
    
        
        //     <div className="col-md-4 mb-4 d-flex flex-column">
        //       <div className="card flex-grow-1 mb-4 float2">
        //         <div className="card-body">
        //           <h3 className="card-title">Our Vision</h3>
        //           <p className="card-text">
        //             To be the foremost global trading partner, known for our commitment to excellence and sustainability.
        //           </p>
        //         </div>
        //       </div>
        //       <div className="card flex-grow-1 float2">
        //         <div className="card-body">
        //           <h3 className="card-title">Our Mission</h3>
        //           <p className="card-text">
        //             To facilitate global trade by providing exceptional import and export services that exceed our clients' expectations.
        //           </p>
        //         </div>
        //       </div>
        //     </div>
    
        //     <div className="col-md-4 mb-4">
        //       <div className="card h-100 float3">
        //         <div className="card-body">
        //           <h3 className="card-title">Core Values</h3>
        //           <p className="card-text">
        //             - Integrity: Upholding the highest standards of honesty and fairness.<br />
        //             - Excellence: Striving for perfection in every transaction.<br />
        //             - Sustainability: Promoting eco-friendly practices in global trade.<br />
        //             - Innovation: Continuously evolving to meet the dynamic needs of the global market.
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>


        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      );
    };
export default About;