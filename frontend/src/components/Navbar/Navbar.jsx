import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>
        <div className="options">hiii</div>
        <div className="search">
          <img src="" alt="" />
          <img src="" alt="" />
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
