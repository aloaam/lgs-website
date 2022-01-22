import React from "react";
import Carousel from "react-elastic-carousel";
import { productList } from "../helpers/ProductList";
import Product from "../components/Product";

export default function Products() {
  return (
    <div className="products">
      <div class="switch-button">
        <input class="switch-button-checkbox" type="checkbox"></input>
        <label class="switch-button-label" for="">
          <span class="switch-button-label-span">Photo</span>
        </label>
      </div>
    </div>
  );
}
