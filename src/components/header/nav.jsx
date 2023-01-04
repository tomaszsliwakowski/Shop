import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ active }) => {
  return (
    <div className={"nav " + active}>
      <NavLink to="/Shop/">Home</NavLink>
      <NavLink to="/Shop/products">Products</NavLink>
      <NavLink to="/Shop/cart">Cart</NavLink>
    </div>
  );
};

export default Nav;
