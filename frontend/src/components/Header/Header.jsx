import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>
            Choose from a diverse menu featuring delectable array of deshes
            crafted with finest ingredients and culinary expertise. Our missiion
            is to satisfy your cravings and elevate your dining experience, one
            delicious meal at a time{" "}
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </>
  );
};
import "./Header.css";

export default Header;
