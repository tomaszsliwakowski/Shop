import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "../data/data";
import { BiUserCircle } from "react-icons/bi";
import AddAnmination from "../Animation/addAnimation";
import { auth, db2 } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiFillStar,
  AiOutlineDelete,
} from "react-icons/ai";

const SingleProduct = () => {
  const [product_count, setproduct_count] = useState(1);
  const [addanim, setaddanim] = useState("none");
  const [comments, setcomments] = useState([]);
  const [writecomment, setwritecomment] = useState("");
  const [user, setuser] = useState("");
  const [render, setrender] = useState(false);
  const Dispatch = useDispatch();
  const { productId } = useParams();
  const [FirtComments, setFirstComments] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);

  let singleProduct = data.find(
    (product) => product.id === parseInt(productId)
  );

  const toogleAddAnim = () => {
    setaddanim("active");

    setTimeout(() => {
      setaddanim("none");
    }, 1900);
  };

  const counterProduct = (action) => {
    if (product_count < singleProduct.max_count) {
      if (action === "increment") {
        setproduct_count(product_count + 1);
      }
    }
    if (product_count > 1) {
      if (action === "decrement") {
        setproduct_count(product_count - 1);
      }
    }
  };

  const AddToCart = () => {
    toogleAddAnim();
    Dispatch({ type: "ADD_TO_CART", payload: singleProduct });
  };

  const WriteComment = (e) => {
    setwritecomment(e.target.value);
  };

  const data_comments = collection(db2, "comment");
  const AddComment = async () => {
    const date = new Date();
    if (writecomment !== "") {
      await addDoc(data_comments, {
        prodId: productId,
        com: writecomment,
        user: user.email,
        date: date.toLocaleString(),
      });
    }
    setrender(!render);
    setwritecomment("");
  };

  useEffect(() => {
    const getCommments = async () => {
      const data = await getDocs(data_comments);
      const com = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const product_comment = com.filter((it) => it.prodId === productId);
      setFirstComments(product_comment.splice(0, 10));
      setcomments(product_comment);
    };
    getCommments();
  }, [render]);

  const ShowMoreComments = () => {
    setFirstComments(FirtComments.concat(comments.splice(0, 10)));
  };

  const DeleteComment = async (id) => {
    const comDoc = doc(db2, "comment", id);
    await deleteDoc(comDoc);
    setrender(!render);
  };

  let { id, title, price, img, rating } = singleProduct;
  singleProduct.count = product_count;
  return (
    <div className="SingleProduct">
      <div className="single_product_container">
        <div className="single_product_top_title">
          <h2>{title}</h2>
        </div>
        <div className="single_product_img">
          <img src={img} alt={"product nr." + productId} />
        </div>
        <div className="single_product_info">
          <div className="single_product_title">
            <h2>{title}</h2>
          </div>
          <div className="single_product_panel">
            <div className="spp1">
              <span>
                <p>
                  {rating}/5
                  <AiFillStar />
                </p>
                <p>{price.toFixed(2)}$</p>
              </span>
            </div>
            <div className="spp2">
              <span>
                <AiOutlinePlusCircle
                  onClick={() => counterProduct("increment")}
                />
                <p>{product_count}</p>
                <AiOutlineMinusCircle
                  onClick={() => counterProduct("decrement")}
                />
              </span>
              <button onClick={AddToCart}>Add to cart</button>
            </div>
            <div className="spp3">
              <span>
                <AiOutlineCheckCircle />
                <p>Available</p>
              </span>
              <span>
                <AiOutlineClockCircle />
                <p>Buy now and receive tomorrow</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="single_product_full_desc">
        <div>
          <img src={img} alt={"product nr." + id} />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            vero illo esse voluptatum eum, quaerat nobis ipsum necessitatibus
            nihil assumenda quod placeat porro repellat et aliquam possimus
            sapiente distinctio quibusd. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam enim veniam cupiditate ad voluptas
            mollitia, tempora voluptates optio earum quidem quisquam vero beatae
            ipsam repellendus reiciendis cum quos perspiciatis. Quis?
          </p>
        </div>
      </div>
      <div className="single_product_comment">
        <div className="opinion">
          <h2>Opinion</h2>
        </div>
        <div className="comment">
          {user ? (
            <div className="add_comment">
              <textarea
                onChange={WriteComment}
                value={writecomment}
                placeholder="Write your opinion"
                maxLength="200"
              ></textarea>
              <button onClick={AddComment}>Add comment</button>
            </div>
          ) : (
            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontWeight: "500" }}>Sign in to add a comment</p>
            </div>
          )}
          <div className="show_comment">
            <ul>
              {FirtComments.length > 0 ? (
                FirtComments.map((item, id) => (
                  <li key={id}>
                    <div className="com_user">
                      <span>
                        <BiUserCircle />
                        {item.user}
                      </span>
                      <p className="com_date">{item.date}</p>
                      {item.user === user?.email ||
                      user?.email === "admin@gmail.com" ? (
                        <AiOutlineDelete
                          onClick={() => DeleteComment(item.id)}
                        />
                      ) : null}
                    </div>
                    <div className="com_text">
                      <p>{item.com}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p style={{ position: "relative", top: "50px" }}>
                  There are no comments
                </p>
              )}
            </ul>
            {FirtComments.length > 0 ? (
              comments.length < 1 ? (
                <div className="com_end">
                  <p>End of comments</p>
                </div>
              ) : (
                <div
                  className="com_end"
                  onClick={ShowMoreComments}
                  style={{ cursor: "pointer" }}
                >
                  <p>Show more comments</p>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>
      <AddAnmination addanim={addanim} text={"Product added to cart!"} />
    </div>
  );
};

export default SingleProduct;
