import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-logo">
          <h1>
            <h5 style={{ margin: 0, border: "10px" }}>
              <button style={{ marginRight: '10px', backgroundColor: "lawngreen", fontWeight: "bolder", fontSize: "18px", border: "0" }}>F</button>
              OODI
            </h5>
          </h1>
          <p>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
          
          <div className="social-icons">
  <a href="#" aria-label="Facebook">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="#" aria-label="Instagram">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="#" aria-label="Twitter">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" aria-label="YouTube">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
</div>
</div>

        <div className="footer-links">
          <h3>Useful links</h3>
          <ul>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Main Menu</h3>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; 2023 Dscode | All rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer
