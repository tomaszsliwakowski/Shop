import React, { useState } from "react";
import data_base from "../data/data";
import AddAnmination from "../Animation/addAnimation";
function AdminProducts() {
  const [addanim, setaddanim] = useState("none");
  const [addProduct, setaddProduct] = useState({
    id: data_base.length,
    title: "",
    price: "",
    count: 1,
    max_count: "",
    promo: null,
    img: "",
    category: "",
    rating: "",
  });

  const UpdateField = (e) => {
    setaddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  };

  const AddProductToData = (e) => {
    e.preventDefault();
    if (addProduct.title !== "") {
      data_base.push(addProduct);
      toogleAddAnim();
      setaddProduct({
        id: data_base.length,
        title: "",
        price: "",
        count: 1,
        max_count: "",
        promo: null,
        img: "",
        category: "",
        rating: "",
      });
    }
  };

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      setaddanim("none");
    }, 1900);
  };

  return (
    <div className="admin_products">
      <div className="add_products">
        <form>
          <h2>Add Product</h2>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={addProduct.title}
            onChange={UpdateField}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={addProduct.price}
            onChange={UpdateField}
          />
          <input
            type="number"
            placeholder="Max_count"
            name="max_count"
            value={addProduct.max_count}
            onChange={UpdateField}
          />
          <input
            type="text"
            placeholder="Image"
            name="img"
            value={addProduct.img}
            onChange={UpdateField}
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={addProduct.category}
            onChange={UpdateField}
          />
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            value={addProduct.rating}
            onChange={UpdateField}
          />
          <button onClick={AddProductToData}>Add Product</button>
        </form>
      </div>
      <AddAnmination addanim={addanim} text={"Product add to shop!"} />
    </div>
  );
}

export default AdminProducts;
