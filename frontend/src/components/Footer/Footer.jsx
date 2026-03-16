import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quibusdam minima, possimus sequi assumenda reiciendis, nulla tempora
          distinctio quis deleniti vel. Quam, facere nostrum delectus rem
          laboriosam minus assumenda fuga.
        </p>
        <div className="icon">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>

      <div className="company">
        <h3>Company</h3>
        <a href="">About</a>
        <a href="">Home</a>
        <a href="">Delivery</a>
        <a href="">privacy policy</a>
      </div>

      <div className="contact">
        <h3>Get in touch</h3>
        <a href="">+1-212-456-4766</a>
        <a href="">contact@tomato.com</a>
      </div>
    </div>
  );
};

export default Footer;
