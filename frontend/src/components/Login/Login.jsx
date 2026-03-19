import React from "react";
import "./Login.css";

const Login = () => {
  const [currState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login">
      <form action="" className="form">
        <div className="card">
          <h2>{currState}</h2>
          {currState === "Sign Up" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" />
          )}
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
