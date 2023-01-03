import React, { useState, useEffect } from "react";
import "./userpanel.css";
import { onAuthStateChanged } from "firebase/auth";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Order from "./order";
import { NavLink, Routes, Route } from "react-router-dom";
import { auth, db } from "../../firebase/firebase-config";
import { ref, onValue } from "firebase/database";

const Userpanel = () => {
  const [userPanel, setuserPanel] = useState("none");
  const [myOrders, setmyOrders] = useState();
  const [user, setuser] = useState({});

  const SwitchPanelUser = () => {
    if (userPanel === "none") {
      setuserPanel("active");
    } else {
      setuserPanel("none");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            const orders = Object.values(data);
            console.log(orders);
            setmyOrders(orders);
          }
        });
      }
      setuser(currentUser);
    });
  }, []);

  return (
    <div className="user_panel">
      <div className={"user_panel_menu " + userPanel}>
        <div className={"user_menu " + userPanel}>
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
            <NavLink to="*/user/order">
              <RiFileList2Line />
              Orders
            </NavLink>
          </p>
        </div>
        <div className={"user_small_menu " + userPanel}>
          <button onClick={SwitchPanelUser}>
            <BsFillArrowRightCircleFill />
          </button>
          <p>
            <FaRegUser />
          </p>
          <p>
            <NavLink to="*/user/order">
              <RiFileList2Line />
            </NavLink>
          </p>
        </div>
      </div>
      <div className={"user_panel_reasult " + userPanel}>
        <Routes>
          <Route path="*/user/order" element={<Order myOrders={myOrders} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Userpanel;
