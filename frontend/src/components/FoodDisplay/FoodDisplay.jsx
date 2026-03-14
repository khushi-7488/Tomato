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
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
