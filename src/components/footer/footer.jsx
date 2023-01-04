import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="foot_info">
        <h2>Shop</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          sapiente, quasi accusantium reiciendis deleniti veritatis consectetur
          porro sunt dicta labore explicabo necessitatibus harum impedit
          perspiciatis exercitationem eligendi repellendus!
        </p>
      </div>
      <div className="foot_nav">
        <Link to="/Shop/">Home</Link>
        <Link to="/Shop/products">Products</Link>
        <Link to="/Shop/cart">Cart</Link>
      </div>
      <div className="foot_contact">
        <a href="tel: 530786458">
          <p>
            <FaPhoneAlt />
            <i>530-786-458</i>
          </p>
        </a>
        <a href="shop@gmail.com">
          <p>
            <SiGmail />
            <i> shop@gmail.com</i>
          </p>
        </a>
        <a href="https://www.facebook.com/">
          <p>
            <BsFacebook />
            <i>Shop</i>
          </p>
        </a>
        <a href="https://www.instagram.com/">
          <p>
            <AiFillInstagram />
            <i>Shop</i>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
