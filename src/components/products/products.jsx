import React, { useState } from "react";
import "../products/products.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ItemAll from "./items_All";
import ItemElectro from "./items_Electro";
import ItemToys from "./items_Toys";
import ItemSearch from "./items_search";
import Error from "./error";
import data from "../data/data";
import AddAnmination from "../Animation/addAnimation";

const Products = () => {
  const storeElectro = data.filter((item) => item.category === "electronics");
  const storetoys = data.filter((item) => item.category === "toys");
  const [btnactive, setbtnactive] = useState(0);
  const [search, setsearch] = useState("");
  const [addanim, setaddanim] = useState("none");
  const search_data = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const cart_product = useSelector((state) => state.addtocart);
  const cart_item = cart_product.filter((item) => item.id >= 0);

  const buttons = [
    { id: 0, name: "All" },
    { id: 1, name: "Electronics" },
    { id: 2, name: "Toys" },
  ];

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      setaddanim("none");
    }, 1900);
  };

  const toggleBtn = (e) => {
    setbtnactive(Number(e.target.id));
    setsearch("");
  };

  const handleinput = (e) => {
    setsearch(e.target.value);
    setbtnactive("");
  };

  const check = () => {
    if (search !== "") {
      setbtnactive("");
    } else {
      setbtnactive(0);
    }
  };
  const Dispatch = useDispatch();
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
    <div className="products">
      <div className="prod__container">
        <div className="search__prod">
          <div className="search__bar">
            <AiOutlineSearch className="search-icon" />
            <input
              value={search}
              type="text"
              placeholder="Search..."
              onKeyUp={check}
              onChange={handleinput}
            />
          </div>
          <div className="select__prod">
            {buttons.map((item, index) => (
              <button
                key={index}
                id={item.id}
                className={btnactive === item.id ? "active" : "none"}
                onClick={toggleBtn}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {data.length >= 0 ? (
          <div className="prod_list">
            {btnactive === 0 ? (
              <ItemAll all={data} addToCart={AddToCart} />
            ) : null}
            {btnactive === 1 ? (
              <ItemElectro electro={storeElectro} addToCart={AddToCart} />
            ) : null}
            {btnactive === 2 ? (
              <ItemToys toys={storetoys} addToCart={AddToCart} />
            ) : null}
            {btnactive !== 0 && btnactive !== 1 && btnactive !== 2 ? (
              search_data.length > 0 ? (
                <ItemSearch search_data={search_data} addToCart={AddToCart} />
              ) : (
                <Error search={search} />
              )
            ) : null}
          </div>
        ) : (
          <div className="prod_list">
            <h2>Loading...</h2>
          </div>
        )}
      </div>
      <AddAnmination addanim={addanim} text={"Product added to cart!"} />
    </div>
  );
};

export default Products;
