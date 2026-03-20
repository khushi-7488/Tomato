import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getCartAmount } = useContext(StoreContext);
  return (
    <div className="placeOrder">
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <div className="name">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <div className="email">
          <input type="text" placeholder="email" />
        </div>
        <div className="street">
          <input type="text" placeholder="street" />
        </div>
        <div className="city">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="zipcode">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <div className="phone">
          <input type="text" placeholder="phone" />
        </div>
      </div>

      <div className="carts-bottom">
        <h2>Cart total</h2>
        <div className="subtotal">
          <p>Subtotal</p>
          <p>${getCartAmount()}</p>
        </div>
        <div className="Delivery">
          <p>Delivery</p>
          <p>${getCartAmount() === 0 ? 0 : 5}</p>
        </div>
        <div className="total">
          <p>total</p>
          <p>${getCartAmount() === 0 ? 0 : getCartAmount() + 5}</p>
        </div>
        <button className="payment">Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
