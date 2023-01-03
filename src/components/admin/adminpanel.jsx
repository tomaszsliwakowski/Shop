import React, { useState, useEffect } from "react";
import "./adminpanel.css";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsBasket,
} from "react-icons/bs";
import { NavLink, Routes, Route } from "react-router-dom";
import Order from "../user/order";
import AdminProducts from "./products";
import { db } from "../../firebase/firebase-config";
import { ref, onValue } from "firebase/database";
const Adminpanel = () => {
  const [adminPanel, setadminPanel] = useState("none");
  const [myOrders, setmyOrders] = useState();

  const SwitchPanelUser = () => {
    if (adminPanel === "none") {
      setadminPanel("active");
    } else {
      setadminPanel("none");
    }
  };

  const [user, setuser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            const orders = Object.values(data);
            setmyOrders(orders);
          }
        });
      }
      setuser(currentUser);
    });
  }, []);

  return (
    <div className="admin_panel">
      <div className={"admin_panel_menu " + adminPanel}>
        <div className={"admin_menu " + adminPanel}>
          <button onClick={SwitchPanelUser}>
            <BsFillArrowLeftCircleFill />
          </button>
          <span>
            <p>
              <FaRegUser /> &nbsp;Hello,
            </p>
            <p>{user.email}</p>
          </span>

          <p className="menu_order">
            <NavLink to="*/admin/orders" onClick={SwitchPanelUser}>
              <RiFileList2Line />
              Orders
            </NavLink>
          </p>
          <p className="menu_order">
            <NavLink to="*/admin/products" onClick={SwitchPanelUser}>
              <BsBasket />
              Products
            </NavLink>
          </p>
        </div>
        <div className={"admin_small_menu " + adminPanel}>
          <button onClick={SwitchPanelUser}>
            <BsFillArrowRightCircleFill />
          </button>
          <p>
            <FaRegUser />
          </p>
          <p>
            <NavLink to="*/admin/orders">
              <RiFileList2Line />
            </NavLink>
          </p>
          <p>
            <NavLink to="*/admin/products">
              <BsBasket />
            </NavLink>
          </p>
        </div>
      </div>
      <div className={"admin_panel_reasult " + adminPanel}>
        <Routes>
          <Route
            path="*/admin/orders"
            element={<Order myOrders={myOrders} />}
          />
          <Route path="*/admin/products" element={<AdminProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Adminpanel;
