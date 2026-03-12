import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [bar, setBar] = useState("home");

  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>
        <div className="options">
          <ul className="list">
            <li
              onClick={() => setBar("home")}
              className={bar === "home" ? "active" : ""}
            >
              home
            </li>
            <li
              onClick={() => setBar("menu")}
              className={bar === "menu" ? "active" : ""}
            >
              menu
            </li>
            <li
              onClick={() => setBar("mobile-app")}
              className={bar === "mobile-app" ? "active" : ""}
            >
              mobile-app
            </li>
            <li
              onClick={() => setBar("contact-us")}
              className={bar === "contact-us" ? "active" : ""}
            >
              contact-us
            </li>
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
