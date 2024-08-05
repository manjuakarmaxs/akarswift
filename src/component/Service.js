import React from "react";
import '../component/service.css'
const Service=()=>{
    return(
        <>
         
    <div className="container my-5" id="services">
      <h2 className="text-center mb-4">Services</h2>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h3 className="card-title">Comprehensive Trade Solutions</h3>
              <p className="card-text">
                At Akarswift Global, we offer a wide array of services tailored to meet the unique needs of our diverse clientele. Our expertise spans across various industries, ensuring that your goods reach their destination safely and efficiently.
              </p>  
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h4 className="card-title">Import Services</h4>
              <p className="card-text">
                Facilitating the seamless import of goods into India with meticulous attention to compliance and logistics.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h4 className="card-title">Export Services</h4>
              <p className="card-text">
                Ensuring that your products reach global markets with precision and reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h4 className="card-title">Customs Brokerage</h4>
              <p className="card-text">
                Navigating the complexities of customs regulations to expedite your shipments.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h4 className="card-title">Supply Chain Management</h4>
              <p className="card-text">
                Optimizing your supply chain for maximum efficiency and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card service-card">
            <div className="card-body">
              <h4 className="card-title">Logistics and Transportation</h4>
              <p className="card-text">
                Providing end-to-end logistics solutions, including warehousing and transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 

        </>
     );
}


export default Service;