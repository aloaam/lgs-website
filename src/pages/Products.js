import React from "react";
import { productList } from "../helpers/ProductList";
import Product from "../components/Product";

export default function Products() {
  return (
    <div className="products">
      <div className="menuList">
        {productList.map((pizza, key) => {
          return <Product key={key} {...pizza} />;
        })}
      </div>
    </div>
  );
}
