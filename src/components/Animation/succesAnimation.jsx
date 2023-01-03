import React from "react";
import "./animation.css";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
const SuccesAnmination = ({ addanim }) => {
  return (
    <div className={"SuccesAnim " + addanim}>
      <div>
        <AiOutlineShopping />
        <h2>Thanks You For Your Order!</h2>
        <MdOutlineDone />
      </div>
    </div>
  );
};

export default SuccesAnmination;
