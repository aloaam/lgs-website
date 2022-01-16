import React from "react";
import Carousel from "react-elastic-carousel";
import { productList } from "../helpers/ProductList";
import Product from "../components/Product";

export default function Products() {
  return (
    <div className="products">
      <Carousel className="company_carousel-products">
        {productList.map((pizza, key) => {
          return <Product key={key} {...pizza} />;
        })}
      </Carousel>
    </div>
  );
}
