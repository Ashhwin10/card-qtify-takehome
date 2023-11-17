import React from "react";
import logo from "../../../Assets/qtifyLogo.png";
import "../Logo/Logo.css";
export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}
