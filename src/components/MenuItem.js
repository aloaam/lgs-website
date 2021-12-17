import React from "react";

export default function MenuItem(props) {
  const { name, image, price } = props;
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
