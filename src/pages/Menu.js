import React from "react";
import { menuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our pizzas... I mean glasses : )</h1>
      <div className="menuList">
        {menuList.map((pizza, key) => {
          return <MenuItem key={key} {...pizza} />;
        })}
      </div>
    </div>
  );
}
