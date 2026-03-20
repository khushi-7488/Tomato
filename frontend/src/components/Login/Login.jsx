import React from "react";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [currState, setCurrentState] = useState("Sign up");

  return (
    <div className="login">
      <form action="" className="form">
        <div className="card">
          <h2>{currState}</h2>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" />
          )}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />

          <button>
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" />
            <p>by continuing, i agree to the terms and conditions</p>
          </div>
          {currState === "Sign up" ? (
            <div>
              <p>
                Already have an account ?{" "}
                <span onClick={() => setCurrentState("Login")}>
                  Login here
                </span>{" "}
              </p>
            </div>
          ) : (
            <div>
              <p>
                create a new account ?{" "}
                <span onClick={() => setCurrentState("Sign up")}>
                  Click here
                </span>{" "}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
