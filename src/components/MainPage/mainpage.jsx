import React from "react";
import { Route, Routes } from "react-router";
import Home from "../home/home";
import Products from "../products/products";
import Cart from "../cart/cart";
import Login from "../login/login";
import Nopage from "../nopage/nopage";
import PayDelivery from "../cart/pay&delivery";
import Register from "../login/register";
import Userpanel from "../user/userpanel";
import Adminpanel from "../admin/adminpanel";
import { useSelector } from "react-redux";
import SingleProduct from "../products/SingleProduct";

const MainPage = () => {
  const cart_state = useSelector((state) => state.addtocart);
  const cart_items = cart_state.filter((item) => item.id >= 0);
  return (
    <>
      <Routes>
        <Route path="/Shop/" element={<Home />} />
        <Route path="/Shop/products" element={<Products />} />
        <Route path="/Shop/cart" element={<Cart cart_items={cart_items} />} />
        <Route path="/Shop/login" element={<Login />} />
        <Route path="/Shop/register" element={<Register />} />
        <Route
          path="/Shop/payDelivery"
          element={<PayDelivery cart_items={cart_items} />}
        />
        <Route path="/Shop/products/:productId" element={<SingleProduct />} />
        <Route path="/Shop/userpanel/*" element={<Userpanel />} />
        <Route path="/Shop/admin/panel/*" element={<Adminpanel />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
};
export default MainPage;
