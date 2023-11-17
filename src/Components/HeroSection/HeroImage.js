import React from "react";
import "../HeroSection/HeroImage.css";
import VibratingHeadphone from "../../Assets/VibratingHeadphone.png";

export default function HeroImage() {
  return (
    <>
      <div className="main">
        <div className="Hero-text">
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div className="Hero-Image">
          <img src={VibratingHeadphone} />
        </div>
      </div>
    </>
  );
}
