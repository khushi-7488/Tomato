import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="containers">
      <div className="app_download">
        <h1 className="suggetion">For Better Experience Download</h1>
        <h1 className="suggetions">Tomato App</h1>
        <div className="download">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
