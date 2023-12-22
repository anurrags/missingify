import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-lists">
        <div className="footer-first">
          <h1>About Us</h1>
          <ul className="footer-list">
            <li> How It works</li>

            <li>Report found</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Anti-Scam</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-sec">
          <h1>Contact</h1>
          <ul className="footer-list">
            <li>Himanshu Yadav</li>
            <li><a href="tel:+919755136077">+91 97551-36077</a></li>
          </ul>
        </div>
        <div className="footer-third">
          <h1>My Account</h1>
          <ul className="footer-list">
            <li>Log In</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
      <p>© 2023 Missingify. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
