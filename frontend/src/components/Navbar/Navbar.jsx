import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bar, setBar] = useState("home");

  return (
    <div>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
        </div>
        <div className="options">
          <ul className="list">
            <Link
              to="/"
              onClick={() => setBar("home")}
              className={bar === "home" ? "active" : ""}
            >
              home
            </Link>
            <a
              href="#food_display"
              onClick={() => setBar("menu")}
              className={bar === "menu" ? "active" : ""}
            >
              menu
            </a>
            <a
              href="#app_download"
              onClick={() => setBar("mobile-app")}
              className={bar === "mobile-app" ? "active" : ""}
            >
              mobile-app
            </a>
            <a
              href="#app_download"
              onClick={() => setBar("contact-us")}
              className={bar === "contact-us" ? "active" : ""}
            >
              contact-us
            </a>
          </ul>
        </div>
        <div className="search">
          <img src={assets.search_icon} alt="" />
          <i class="fa-solid fa-cart-shopping"></i>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
