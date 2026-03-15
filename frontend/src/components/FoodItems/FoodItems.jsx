import React from "react";
import "./FoodItems.css";
import { food_list } from "../../assets/assets";
import { assets } from "../../assets/assets.js";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const FoodItems = () => {
  return (
    <div>
      {food_list.map((index, item) => {
        return (
          <FoodDisplay
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
