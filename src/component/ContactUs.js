import React, { useRef, useState } from 'react';
import '../component/ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Send Message');
  
  const checkEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (regx.test(value) === false) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5k45rh6', 'template_hva34u1', form.current, 'jk8J2etAg4NCjetGm')
      .then((result) => {
        setButtonText('Message Sent');
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="text-center mb-4">Contact Form</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email-field"
                placeholder="Your Email"
                required
                onChange={checkEmail}
              />
              <span className="text-danger">{error}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" type="submit">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
