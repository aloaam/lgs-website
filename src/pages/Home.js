import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../assets/images/pvc_landing_page.png";
import LeslieMottoImage from "../assets/images/leslie_motto.png";
import { rgbToHex } from "@mui/material";

export default function Home() {
  return (
    <div className="home">
      <div className="text-and-product">
        <div className="text-container">
          <div className="text-container__title">
            <h1 style={{ color: "#21569c" }}>LGS Suppliers</h1>
          </div>
          <div className="text-container__text">
            <p>
              Our site is currently under construction, but please contact us!
            </p>
          </div>
          <div className="text-container__button">
            <Link to="get-a-quote">
              <button> Contact </button>
            </Link>
          </div>
          <div
            className="text-container__leslie-motto"
            // style={{ backgroundImage: `url(${LeslieMottoImage})` }}
          >
            <img src={LeslieMottoImage} alt="leslie-motto" />
          </div>
        </div>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${ProductImage})` }}
        ></div>
      </div>
    </div>
  );
}
