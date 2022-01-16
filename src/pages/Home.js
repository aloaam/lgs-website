import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../assets/images/pvc_landing_page.png";
import LeslieMottoImage from "../assets/images/leslie_motto.png";

export default function Home() {
  return (
    <div className="home">
      <div className="text-and-product">
        <div className="text-container">
          <h1> Leslie Glass Suppliers</h1>
          <p>
            Our site is currently under construction, but please check us out!
          </p>
          <Link to="products">
            <button> Products </button>
          </Link>
          <div
            className="text-container__leslie-motto"
            style={{ backgroundImage: `url(${LeslieMottoImage})` }}
          ></div>
        </div>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${ProductImage})` }}
        ></div>
      </div>
    </div>
  );
}
