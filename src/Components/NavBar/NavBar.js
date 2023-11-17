import React from "react";
import Logo from "./Logo/Logo";
import "../NavBar/NavBar.css";
import Button from "./Button/Button";
import Searchbox from "./SearchBox/SearchBox";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Searchbox />
      <Button name="Give Feedback" />
    </nav>
  );
}
