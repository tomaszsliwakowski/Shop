import "./header.css";
import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import Nav from "./nav";
import { onAuthStateChanged } from "firebase/auth";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const item = useSelector((state) => state.addtocart);
  const cart_item = item.filter((item) => item.id >= 0);
  const price = cart_item.map((item) => item.price * item.count);
  const [active, setactive] = useState("none");
  const [activecart, setactivecart] = useState("none");
  const [userPanel, setuserPanel] = useState("none");
  const navigate = useNavigate();
  const [sum, setsum] = useState(0);
  const location = useLocation();
  const [user, setuser] = useState({});
  const [admin, setadmin] = useState(false);

  useEffect(() => {
    let sumprice = 0;
    for (var i in price) {
      sumprice += price[i];
    }
    setsum(sumprice);
  }, [price]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);

      if (currentUser?.email === "admin@gmail.com") {
        setadmin(true);
      } else {
        setadmin(false);
      }
    });
  }, []);

  const switchopt = () => {
    if (active === "none") {
      setactive("active");
      setactivecart("none");
    } else {
      setactive("none");
    }
  };
  const switchcart = () => {
    if (activecart === "none") {
      setactivecart("active");
      setactive("none");
    } else {
      setactivecart("none");
    }
  };

  const logout = async () => {
    await signOut(auth);
    showUserPanel();
    if (
      location.pathname !== "/Shop/userpanel" &&
      location.pathname !== "/Shop/admin/panel" &&
      location.pathname !== "/Shop/admin/panel/*/admin/orders" &&
      location.pathname !== "/Shop/admin/panel/*/admin/products" &&
      location.pathname !== "/Shop/userpanel/*/user/order"
    ) {
      navigate(location.pathname);
    } else {
      navigate("/Shop/");
    }
  };

  const showUserPanel = () => {
    if (userPanel === "none") {
      setuserPanel("active");
    } else {
      setuserPanel("none");
    }
  };

  return (
    <header>
      <div className="header"></div>
      <div className="header__logo">
        <Link to="/Shop/">Shop</Link>
      </div>
      {active === "active" ? null : <Nav active={active} />}
      <div className="header__cart-login">
        <div className="header__cart">
          <AiOutlineShoppingCart className="cart" onClick={switchcart} />
          <p>({cart_item.length})</p>
        </div>
        <div className="header__login">
          {user ? (
            <div className={"user-icon " + userPanel}>
              {userPanel === "active" ? (
                <IoMdClose onClick={showUserPanel} />
              ) : (
                <FaRegUser onClick={showUserPanel} />
              )}
              <div className={"user-panel " + userPanel}>
                {admin ? (
                  <Link
                    to="/Shop/admin/panel/*/admin/orders"
                    onClick={showUserPanel}
                  >
                    Panel
                  </Link>
                ) : (
                  <Link
                    to="/Shop/userpanel/*/user/order"
                    onClick={showUserPanel}
                  >
                    Panel
                  </Link>
                )}
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/Shop/login">Login</Link>
          )}
        </div>
      </div>
      <div className={"cart__list " + activecart}>
        <h2>Cart</h2>
        {cart_item.length === 0 ? (
          <div className="empty">
            <h2>Cart is empty</h2>
          </div>
        ) : (
          <div className="cart_cont">
            <div className="cart__items">
              <ul>
                {cart_item.map((item, id) => (
                  <li key={id}>
                    <div className="cart_left">
                      <img src={item.img} alt="cart_item" />
                    </div>
                    <div className="cart_right">
                      <p>
                        {item.title} {`(${item.count} pc)`}
                      </p>
                      <p>{item.price}$</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <span className="total">
              <p>Total amount</p>
              <p>{sum.toFixed(2)}$</p>
            </span>
          </div>
        )}

        <AiOutlineCloseCircle className="close_btn" onClick={switchcart} />
        <Link to="/Shop/cart" onClick={switchcart}>
          Check Out
        </Link>
      </div>
      <div className={"hamb " + active} onClick={switchopt}>
        <div className="e_1" onClick={switchopt}></div>
        <div className="e_2" onClick={switchopt}></div>
        <div className="e_3" onClick={switchopt}></div>
        <div className={"list_opt " + active + `${user ? "log" : ""}`}>
          {active === "active" ? <Nav active={active} /> : null}
          {active === "active" ? (
            user ? (
              <div className="user-hamb">
                <FaRegUser onClick={showUserPanel} />
                <div className={"user-panel-hamb"}>
                  {admin ? (
                    <Link to="/Shop/admin/panel/*/admin/orders">Panel</Link>
                  ) : (
                    <Link to="/Shop/userpanel/*/user/order">Panel</Link>
                  )}
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/Shop/login" className="user-login">
                Login
              </Link>
            )
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
