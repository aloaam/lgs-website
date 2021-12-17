import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> LGS Pizzeria!</h1>
        <p> One pizza to cheese them all!</p>
        <Link to="menu">
          <button> Order Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
