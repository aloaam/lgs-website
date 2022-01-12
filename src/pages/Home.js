import React from "react";
import { Link } from "react-router-dom";
import LandingPageImage from "../assets/images/casa_de_lado.jpeg";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        style={{ backgroundImage: `url(${LandingPageImage})` }}
      />

      <div className="text-container">
        <h1> Leslie Glass Systems</h1>
        <p> We are currently under construction, but please check us out!</p>
        <Link to="menu">
          <button> Products </button>
        </Link>
      </div>
    </div>
  );
}
