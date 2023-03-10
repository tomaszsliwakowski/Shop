import { AiFillStar } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

const ItemSearch = ({ search_data, addToCart }) =>
  search_data.map((item, id) => (
    <div className="item" key={id}>
      <div className="image">
        <Link to={`/Shop/products/${item.id}`}>
          <img src={item.img} alt="item" />
        </Link>
      </div>
      <div className="info">
        <ul>
          <li>{item.title}</li>
          <li>
            Rating : {item.rating}/5 <AiFillStar className="star" />
          </li>
          <li>Price : {item.price}$</li>
        </ul>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  ));

export default ItemSearch;
