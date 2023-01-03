import React from "react";

const addToCartAnmination = ({ addanim }) => {
  return (
    <div className={"addanimation " + addanim}>
      <div>
        <p>Product added to cart</p>
      </div>
    </div>
  );
};

export default addToCartAnmination;
