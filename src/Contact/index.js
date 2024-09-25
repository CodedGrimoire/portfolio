import React from 'react';
import './index.css';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4008309094744!2d90.39945221498124!3d23.75467658458627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bcd03434d1c7%3A0x65d5d4d65b7333f4!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1695338403277!5m2!1sen!2sbd"
            width="600"
            height="390"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:maliktazkia@gmail.com">maliktazkia@gmail.com</a></p>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
