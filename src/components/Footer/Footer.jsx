import React from "react";
import "./Footer.css";
import icons from "../../assets/js/icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_icons">
          <img src={icons.facebook_icon} alt="facebook" />
          <img src={icons.instagram_icon} alt="instagram" />
          <img src={icons.twitter_icon} alt="twitter" />
          <img src={icons.youtube_icon} alt="youtube" />
        </div>
        <ul className="footer_headings">
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investers Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Prefrences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p>&copy; 1997-2023 Netflix, Inc</p>
      </div>
    </div>
  );
};

export default Footer;
