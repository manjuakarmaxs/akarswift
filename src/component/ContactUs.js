import React from 'react';
import '../component/ContactUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import   { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import  { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {

const regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const [email,setEmail]=useState(' ');
const [error,setError]=useState(' ');

  
  const checkEmail=(e)=>
  {
    setEmail(e.target.value);
    if(regx.test(email)===false)
    {
      setError("Please Enter valid Email")
    }
    else
    {
      setError('');
      return true;
    }
   
  }
 

  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5k45rh6', 'template_hva34u1', form.current, 'jk8J2etAg4NCjetGm')
    const button1=document.querySelector(".forn_btn");
    button1.innerText="Message sent";
    e.target.reset();     
  };
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      

      <div className="row">
        {/* Contact Details and Form */}
        <div className="col-md-6">
          <div className="contact-details">
          <h3>Contact Information</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://maps.app.goo.gl/UYnzDVZ6C9zKTbPW6" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  Akarswift Global Pvt Ltd
                </a>
              </li>
              <li><i className="bi bi-telephone"></i> Phone: 08026618661</li>
              <li><i className="bi bi-envelope"></i> Email: info@akarmaxs.in</li>
              <li><i className="bi bi-clock"></i> Office Hours: Monday to Friday, 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Contact Form */}
          <h3 className="text-center mb-4">Contact Form</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email"  name="email" className="form-control" id="email-field"  placeholder="Your Email" required onChange={checkEmail}/>
                <span  onClick={email} id="email-error" >{error}</span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message"  className="form-label">Message</label>
              <textarea className="form-control" name="message" id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button className="forn_btn" type="submit"   style={{ backgroundColor: ' #CD7F32', color: 'black' }}>Send Message</button>
            </div>
          </form>
        </div>


        {/* Map Embedding */}
        <div className="col-md-6">
          <div className="map-container">
            <h3>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1839164101916!2d77.5244200095273!3d12.960080315080257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f79820d4949%3A0x84d8a7328c902cec!2sRVG%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1722589991531!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
