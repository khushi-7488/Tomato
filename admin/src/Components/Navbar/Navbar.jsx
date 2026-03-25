import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <img id="logo" src={assets.logo} alt="" />
        <img id="profile" src={assets.profile_image} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
