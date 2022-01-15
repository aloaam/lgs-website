import React from "react";
import Logo from "../assets/svgs/lgs_logo_secundario_negro.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__nav-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/company">Company</Link>
        <Link to="/get-a-quote">Get a Quote</Link>
        <Link to="/">Language</Link>
      </div>
    </div>
  );
}
