import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form action="" className="form">
        <div className="card">
          <h2>Sign up</h2>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
          <button>Sign Up</button>
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" />
            <p>by continuing, i agree to the terms and conditions</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
