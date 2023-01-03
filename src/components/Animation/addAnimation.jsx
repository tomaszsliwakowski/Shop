import React from "react";
import "./animation.css";
const AddAnmination = ({ addanim, text }) => {
  return (
    <div className={"addAnim " + addanim}>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AddAnmination;
