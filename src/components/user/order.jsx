import React from "react";

import "./order.css";
const Order = ({ myOrders }) => {
  const data_cart = myOrders?.map((item) => item.Cart);
  const data_delivery = myOrders?.map((item) => item.delivery);
  const data_pay = myOrders?.map((item) => item.pay);
  const datetime = myOrders?.map((item) => item.time);
  const price = myOrders?.map((item) => item.price);

  return (
    <div className="order">
      <div className="order_list">
        <ul>
          {myOrders ? (
            data_cart?.map((item, id) => (
              <li key={id}>
                <div className="order_left">
                  <h3>Order ({id + 1})</h3>
                  <span>
                    <p>Delivery method:</p> <p>{data_delivery[id].name}</p>
                  </span>
                  <span>
                    <p> Pay method:</p> <p>{data_pay[id].name}</p>
                  </span>
                  <span>
                    <p>Order date:</p> <p>{datetime[id]}</p>
                  </span>
                  <span>
                    <p>Price:</p>
                    <p>
                      {(
                        price[id] +
                        data_delivery[id].price +
                        data_pay[id].price
                      ).toFixed(2)}
                      $
                    </p>
                  </span>
                </div>
                <div className="order_right">
                  {item.map((it, id) => (
                    <div key={id}>
                      <p>{it.title}</p>
                      <p>{it.count}pc.</p>
                      <img src={it.img} alt="orderProduct" />
                    </div>
                  ))}
                </div>
              </li>
            ))
          ) : (
            <h2>No order</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Order;
