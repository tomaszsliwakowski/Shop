import React, { useState, useEffect } from "react";
import "./payDelivery.css";
import { BsTruck } from "react-icons/bs";
import {
  AiOutlineShop,
  AiOutlineDollar,
  AiOutlineCreditCard,
  AiOutlineWallet,
  AiOutlineBank,
} from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { auth, db } from "../../firebase/firebase-config";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccesAnmination from "../Animation/succesAnimation";

const PayDelivery = ({ cart_items }) => {
  const price = cart_items.map((item) => item.price * item.count);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [sum, setsum] = useState(0);

  useEffect(() => {
    let sumprice = 0;
    for (var i in price) {
      sumprice += price[i];
    }
    setsum(sumprice);
  }, [price]);

  const [delivery, setdelivery] = useState({
    name: "Choose delivery method",
    price: 0,
  });
  const [pay, setpay] = useState({
    name: "pay method",
    price: 0,
  });
  const [checkoneD, setcheckoneD] = useState(false);
  const [checktwoD, setchecktwoD] = useState(false);
  const [checkthreD, setcheckthreD] = useState(false);

  const [checkoneP, setcheckoneP] = useState(false);
  const [checktwoP, setchecktwoP] = useState(false);
  const [checkthreP, setcheckthreP] = useState(false);
  const [checkfourP, setcheckfourP] = useState(false);
  const [checkfiveP, setcheckfiveP] = useState(false);
  const [addanim, setaddanim] = useState("none");

  const deliveryMethod = {
    opt1: {
      name: "Delivery man",
      price: 4.57,
    },
    opt2: {
      name: "In-store pickup",
      price: 0,
    },
    opt3: {
      name: "Parcel post",
      price: 2.29,
    },
  };

  const payMethod = {
    opt1: {
      name: "Pay online",
      price: 0,
    },
    opt2: {
      name: "Credit card online",
      price: 0,
    },
    opt3: {
      name: "Traditional transfer",
      price: 0,
    },
    opt4: {
      name: "On delivery",
      price: 5,
    },
    opt5: {
      name: "Installments",
      price: 0,
    },
  };

  const deliveryHandler = (e) => {
    if (e.target.name === deliveryMethod.opt1.name) {
      setdelivery(deliveryMethod.opt1);
      setcheckoneD(true);
      setchecktwoD(false);
      setcheckthreD(false);
    } else if (e.target.name === deliveryMethod.opt2.name) {
      setdelivery(deliveryMethod.opt2);
      setcheckoneD(false);
      setchecktwoD(true);
      setcheckthreD(false);
    } else if (e.target.name === deliveryMethod.opt3.name) {
      setdelivery(deliveryMethod.opt3);
      setcheckoneD(false);
      setchecktwoD(false);
      setcheckthreD(true);
    }
  };

  const payHandler = (e) => {
    if (e.target.name === payMethod.opt1.name) {
      setpay(payMethod.opt1);
      setcheckoneP(true);
      setchecktwoP(false);
      setcheckthreP(false);
      setcheckfourP(false);
      setcheckfiveP(false);
    } else if (e.target.name === payMethod.opt2.name) {
      setpay(payMethod.opt2);
      setcheckoneP(false);
      setchecktwoP(true);
      setcheckthreP(false);
      setcheckfourP(false);
      setcheckfiveP(false);
    } else if (e.target.name === payMethod.opt3.name) {
      setpay(payMethod.opt3);
      setcheckoneP(false);
      setchecktwoP(false);
      setcheckthreP(true);
      setcheckfourP(false);
      setcheckfiveP(false);
    } else if (e.target.name === payMethod.opt4.name) {
      setpay(payMethod.opt4);
      setcheckoneP(false);
      setchecktwoP(false);
      setcheckthreP(false);
      setcheckfourP(true);
      setcheckfiveP(false);
    } else if (e.target.name === payMethod.opt5.name) {
      setpay(payMethod.opt5);
      setcheckoneP(false);
      setchecktwoP(false);
      setcheckthreP(false);
      setcheckfourP(false);
      setcheckfiveP(true);
    }
  };

  const writeToDatabase = () => {
    if (
      delivery.name !== "Choose delivery method" &&
      pay.name !== "pay method"
    ) {
      let date = new Date();
      const u_id = uid();
      set(ref(db, `/${auth.currentUser.uid}/${u_id}`), {
        Cart: cart_items,
        pay: pay,
        delivery: delivery,
        price: sum,
        time: date.toLocaleString(),
        uid: u_id,
      });
      Dispatch({ type: "CLEAR_CART", payload: [] });
      setdelivery({
        name: "Choose delivery method",
        price: 0,
      });
      toogleAddAnim();
    }
  };

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      navigate("/");
      setaddanim("none");
    }, 1800);
  };

  return (
    <div className="pay_delivery">
      <div className="p_d_container">
        <div className="delivery">
          <h2>Delivery</h2>
          <div className="delivery_opt">
            <ul>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Delivery man"
                      onChange={deliveryHandler}
                      checked={!!checkoneD}
                    />
                    <p>Delivery man </p>
                  </span>
                </label>
                <BsTruck className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="In-store pickup"
                      onChange={deliveryHandler}
                      checked={!!checktwoD}
                    />
                    <p>In-store pickup</p>
                  </span>
                </label>
                <AiOutlineShop className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Parcel post"
                      onChange={deliveryHandler}
                      checked={!!checkthreD}
                    />
                    <p>Parcel post 24/7</p>
                  </span>
                </label>
                <FiPackage className="delivery_icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="pay">
          <h2>Pay</h2>
          <div className="pay_opt">
            <ul>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Pay online"
                      onChange={payHandler}
                      checked={!!checkoneP}
                    />
                    <p>Pay online</p>
                  </span>
                </label>
                <AiOutlineDollar className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Credit card online"
                      onChange={payHandler}
                      checked={!!checktwoP}
                    />
                    <p>Credit card online</p>
                  </span>
                </label>
                <AiOutlineCreditCard className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Traditional transfer"
                      onChange={payHandler}
                      checked={!!checkthreP}
                    />
                    <p>Traditional transfer</p>
                  </span>
                </label>
                <BiTransfer className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="On delivery"
                      onChange={payHandler}
                      checked={!!checkfourP}
                    />
                    <p>On delivery (5$)</p>
                  </span>
                </label>
                <AiOutlineWallet className="delivery_icon" />
              </li>
              <li>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      name="Installments"
                      onChange={payHandler}
                      checked={!!checkfiveP}
                    />
                    <p>Installments</p>
                  </span>
                </label>
                <AiOutlineBank className="delivery_icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p_d_cart">
        <div className="p_d_cart_container">
          <div className="cart_items">
            <ul>
              {cart_items.map((item, id) => (
                <li key={id}>
                  <div>
                    <img src={item.img} alt="cart_item" />
                  </div>
                  <div className="p_d_cart_info">
                    <p className="p1">{item.title}</p>
                    <span>
                      <p>{item.count} pc.</p>
                      <p>{item.price}$</p>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="delivery_selected">
            <div className="how_delivery">
              <BsTruck className="del_icon" />
              <div>
                <p>Delivery method:</p>
                <span>{delivery.name}</span>
              </div>
            </div>
          </div>
          <div className="cart_sum">
            <div>
              <span>
                <p>Cart value</p>
                <p>{sum.toFixed(2)}$</p>
              </span>
              <span>
                <p>Delivery</p>
                <p>
                  {pay.price === 0
                    ? delivery.price !== 0
                      ? delivery.price + "$"
                      : "Free"
                    : delivery.price !== 0
                    ? delivery.price + "$" + " + " + pay.price + "$"
                    : "Free" + " + " + pay.price + "$"}
                </p>
              </span>
            </div>
            <div>
              <span>
                <p>For payment</p>
                <p>
                  {(
                    Number(sum) + Number(delivery.price + Number(pay.price))
                  ).toFixed(2)}
                  $
                </p>
              </span>
              <button onClick={writeToDatabase}>Place an order</button>
            </div>
          </div>
        </div>
      </div>
      <SuccesAnmination addanim={addanim} />
    </div>
  );
};

export default PayDelivery;
