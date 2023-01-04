import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import AddAnmination from "../Animation/addAnimation";

const Cart = ({ cart_items }) => {
  const price = cart_items.map((item) => item.price * item.count);
  const [addanim, setaddanim] = useState("none");
  const [sum, setsum] = useState(0);
  const [user, setuser] = useState({});
  const Dispatch = useDispatch();

  useEffect(() => {
    let sumprice = 0;
    for (var i in price) {
      sumprice += price[i];
    }
    setsum(sumprice);
  }, [price]);

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      setaddanim("none");
    }, 1900);
  };

  const clearCart = () => {
    Dispatch({ type: "CLEAR_CART", payload: [] });
  };

  const removeItem = (item) => {
    cart_items.splice(cart_items.indexOf(item), 1);
    Dispatch({ type: "REMOVE_ITEM", payload: cart_items });
    toogleAddAnim();
  };
  const counter = (item, action) => {
    if (action === "increment") {
      let index = cart_items.indexOf(item);

      if (item.max_count > item.count) {
        item.count = item.count + 1;
      }
      cart_items.splice(index, 1, item);
      Dispatch({ type: "UPDATE_ITEM", payload: cart_items });
    } else if (action === "decrement") {
      let index = cart_items.indexOf(item);
      if (item.count >= 1) {
        item.count = item.count - 1;
      }
      cart_items.splice(index, 1, item);
      Dispatch({ type: "UPDATE_ITEM", payload: cart_items });
      if (item.count <= 0) {
        removeItem(item);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);

  return (
    <div className="cart_page">
      <div className="cart_container">
        {cart_items.length === 0 ? (
          <div className="cart_empty">
            <h2>Your cart is empty</h2>
            <Link to="/Shop/">Go to home page</Link>
          </div>
        ) : (
          <div className="cart_full">
            <div className="cart_products">
              <div className="top">
                <span>
                  <h3>Cart</h3>
                  <p>({cart_items.length})</p>
                </span>
                <button onClick={clearCart}>
                  <BsTrash /> &nbsp; Clear cart
                </button>
              </div>
              <div className="bottom">
                <ul>
                  {cart_items.map((item, id) => (
                    <li key={id}>
                      <div className="item_img">
                        <Link to={`/Shop/products/${item.id}`}>
                          <img src={item.img} alt="item" />
                        </Link>
                      </div>
                      <div className="item_info">
                        <div className="item_info-left">
                          <p>{item.title}</p>
                        </div>
                        <div className="item_info-right">
                          <p>{Number(item.price).toFixed(2)}$</p>
                          <div className="select-counter">
                            <button onClick={() => counter(item, "increment")}>
                              +
                            </button>
                            <p>{item.count}</p>
                            <button onClick={() => counter(item, "decrement")}>
                              -
                            </button>
                          </div>
                          <button
                            className="trash"
                            onClick={() => removeItem(item)}
                          >
                            <BsTrash />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cart_pay">
              <span>
                <p>Total amount </p> <p>{sum.toFixed(2)}$</p>
              </span>
              {user ? (
                <Link to="/Shop/payDelivery">Go to delivery</Link>
              ) : (
                <Link to="/Shop/login">Go to delivery</Link>
              )}
              <p className="cart_pay-info">
                Finish placing orders - Products added to the basket do not mean
                that they have been reserved.
              </p>
            </div>
          </div>
        )}
      </div>
      <AddAnmination addanim={addanim} text={"Product removed"} />
    </div>
  );
};

export default Cart;
