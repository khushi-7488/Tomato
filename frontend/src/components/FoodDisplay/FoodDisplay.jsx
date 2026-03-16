import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { assets } from "../../assets/assets.js";
import { food_list } from "../../assets/assets.js";

const FoodDisplay = ({ category }) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div id="food_display">
      <h1>Top dishes near you</h1>
      <div className="food-container">
        {food_list.map((item, index) => {
          // to get category wise food
          if (category === "All" || category === item.category) {
            return (
              <div className="food-details" key={index}>
                <img src={item.image} alt="" />
                <div className="rating">
                  <h3 className="name">{item.name}</h3>
                  <img className="ratings" src={assets.rating_starts} alt="" />
                </div>
                <p className="description">{item.description}</p>
                <div className="add_icon">
                  {!cartItems[item._id] ? (
                    <img
                      onClick={() =>
                        setCartItems((prev) => ({ ...prev, [item._id]: 1 }))
                      }
                      className="add"
                      src={assets.add_icon_white}
                      alt=""
                    />
                  ) : (
                    <div className="add_cart">
                      <img
                        onClick={() =>
                          setCartItems((prev) => ({
                            ...prev,
                            [item._id]: prev[item._id] + 1,
                          }))
                        }
                        src={assets.add_icon_green}
                        alt=""
                      />
                      <p>{cartItems[item._id]}</p>

                      <img
                        onClick={() =>
                          setCartItems((prev) => ({
                            ...prev,
                            [item._id]: prev[item._id] - 1,
                          }))
                        }
                        src={assets.remove_icon_red}
                        alt=""
                      />
                    </div>
                  )}
                  <p className="price">${item.price}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
