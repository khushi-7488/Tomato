import React from "react";
import "./FoodDisplay.css";
import { assets } from "../../assets/assets.js";
import { food_list } from "../../assets/assets.js";

const FoodDisplay = () => {
  return (
    <div>
      <h1>Top dishes near you</h1>
      <div className="food-container">
        {food_list.map((item, index) => (
          <div className="food-details" key={index}>
            <img src={item.image} alt="" />
            <div className="rating">
              <h3 className="name">{item.name}</h3>
              <img className="ratings" src={assets.rating_starts} alt="" />
            </div>
            <p className="description">{item.description}</p>
            <div className="add_icon">
              <img className="add" src={assets.add_icon_white} alt="" />
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
