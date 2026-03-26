import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [color, setColour] = useState();
  return (
    <div className="sidebar-container">
      <Link to="/add" onClick={() => setColour("Add items")}>
        <div id="sidebar-items">
          <img src={assets.add_icon} alt="" />
          <h3 className={color === "Add items" ? "active" : ""}>Add items</h3>
        </div>
      </Link>
      <Link to="/list" onClick={() => setColour("List items")}>
        <div id="sidebar-items">
          <img src={assets.order_icon} alt="" />
          <h3 className={color === "List items" ? "active" : ""}>List items</h3>
        </div>
      </Link>
      <Link to="/orders" onClick={() => setColour("Orders")}>
        <div id="sidebar-items">
          <img src={assets.order_icon} alt="" />
          <h3 className={color === "Orders" ? "active" : ""}>Orders</h3>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
