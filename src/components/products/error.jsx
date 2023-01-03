import React from "react";
import "./products.css";
const Error = ({ search }) => (
  <div className="error_search">
    <h3>No product : "{search}"</h3>
  </div>
);

export default Error;
