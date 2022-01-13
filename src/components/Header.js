import React from "react";
import Logo from "../assets/svgs/lgo_logo_principal_negro.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__nav-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/get-a-quote">Get a Quote</Link>
        <Link to="/language">Language</Link>
      </div>
    </div>
  );
}
