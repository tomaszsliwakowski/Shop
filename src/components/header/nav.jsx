import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ active }) => {
  return (
    <div className={"nav " + active}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default Nav;
