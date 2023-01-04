import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import BANER from "../../source/baner.jpg";
import data_base from "../data/data";
import { BiLike } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import AddAnmination from "../Animation/addAnimation";
import { Link } from "react-router-dom";
const Home = () => {
  const data = data_base;
  const [rnd] = useState(Math.round(Math.random() * 9));
  const show_data = data.filter((item) => item === data[rnd]);
  const cart_product = useSelector((state) => state.addtocart);
  const cart_item = cart_product.filter((item) => item.id >= 0);
  const [addanim, setaddanim] = useState("none");
  const Dispatch = useDispatch();

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      setaddanim("none");
    }, 1900);
  };

  const AddToCart = (item) => {
    toogleAddAnim();
    if (cart_product.filter((e) => e.id === item.id).length > 0) {
      const index = cart_item.findIndex((it) => it.title === item.title);
      item.count = item.count + 1;
      cart_item.splice(index, 1, item);

      Dispatch({ type: "UPDATE_ITEM", payload: cart_item });
    } else {
      Dispatch({ type: "ADD_TO_CART", payload: item });
    }
  };
  return (
    <div className="home">
      <div className="baner">
        <img src={BANER} alt="baner" />
      </div>
      <div className="recommended">
        <div className="sec_one">
          {show_data.map((item, id) => (
            <div className="el1" key={id}>
              <div className="el2">
                <p>Recomended</p>
                <Link to={`/Shop/products/${item.id}`}>
                  <img src={item.img} alt="item" />
                </Link>
              </div>
              <div className="el3">
                <ul>
                  <li>{item.title}</li>
                  <li>
                    Rating : {item.rating}/5 <AiFillStar className="star" />
                  </li>
                  <li className="price">
                    <p>{item.price.toFixed(2)}$</p>
                  </li>

                  <button
                    onClick={() => {
                      AddToCart(item);
                    }}
                  >
                    <i className="fa-solid fa-cart-plus hot_shot"></i>
                  </button>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="sec_two">
          <div className="wrapper">
            <div>
              <span>
                <BiLike />
              </span>
              <span>Easy and convenient shopping.</span>
            </div>
            <div>
              <span>
                <MdOutlinePriceCheck />
              </span>
              <span>Competitive prices.</span>
            </div>

            <div>
              <span>
                <BsTruck />
              </span>
              <span>Fast delivery with many options.</span>
            </div>
            <div>
              <span>
                <BsChatLeftText />
              </span>
              <span>Customer Service in the foreground.</span>
            </div>
          </div>
        </div>
      </div>
      <AddAnmination addanim={addanim} text={"Product add to cart!"} />
    </div>
  );
};

export default Home;
