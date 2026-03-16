import React from "react";
import "./ExploreMenu.css";
import { assets } from "../../assets/assets.js";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="content">
      <div className="caption">
        <h1>Explore Menu</h1>
        <p>
          {" "}
          Choose from a diverse menu featuring delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time..
        </p>
      </div>

      {/* Wrap the map here */}
      <div className="menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name,
              )
            }
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h5>{item.menu_name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
