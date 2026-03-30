import React, { useContext } from "react";
import "./Cart.css";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems, getCartAmount } = useContext(StoreContext);
  return (
    <div className="cart-container">
      {getCartAmount() > 0 ? (
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      ) : (
        ""
      )}

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div className="cart-items" key={index}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]} </p>
              <p
                className="cross"
                onClick={() =>
                  setCartItems((prev) => ({
                    ...prev,
                    [item._id]: 0,
                  }))
                }
              >
                X
              </p>
            </div>
          );
        }
      })}

      {getCartAmount() > 0 ? (
        <div className="cart-bottom">
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
          <Link to="/order">
            <button className="payment">Proceed To Checkout</button>
          </Link>
        </div>
      ) : (
        <h3 id="empty">Your Cart Is Empty !!</h3>
      )}
    </div>
  );
};

export default Cart;
