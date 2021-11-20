import React from "react";
import {Link} from 'react-router-dom'
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--contact-us">
        <h4>Contact Us</h4>
        <input type="text" name="" id="mailbox" placeholder="Enter your email" />
        <button id="footer-contact-us-btn">Let's Talk</button>
      </div>

      <div className="footer--links">
        <div className="footer--logo">
          <div className="footer--home">
            <img src="./allImages/FDS-white.png" alt="" />
          </div>
          <div className="social--links">
            <img src="./allImages/instagram.png" alt="" />
            <img src="./allImages/facebook.png" alt="" />
            <img src="./allImages/linkedin.png" alt="" />
            <img src="./allImages/twitter.png" alt="" />
            <img src="./allImages/pinterest.png" alt="" />
          </div>
        </div>

        <div className="footer--quick-links">
          <div>
            <h4>Quick Links</h4>
            <p><Link to="/about">- About Us</Link></p>
            <p><Link to="/portfolio">- Portfolio</Link></p>
            <p><Link to="/services">- Services</Link></p>
            <p><Link to="/blogs">- Blogs</Link></p>
            <p><Link to="/products">- Products</Link></p>
            <p><Link to="/privacy">- Privacy Policy</Link></p>
          </div>
        </div>
        
        <div className="footer--contact-details">
          <div>
            <img src="./allImages/whatsapp.png" alt="" />
            <p>+91 9011059109</p>
          </div>
          <div>
            <img src="./allImages/email.png" alt="" />
            <p>official@fosterdigitalservices.com</p>
          </div>
        </div>

      </div>
      <div className="footer--copyright">
        <h3>Foster Digital Services</h3>
        <h3>Copyright &copy; 2021, All rights reserved.</h3>
      </div>
    </div>
  );
}

export default Footer;
