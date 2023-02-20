import React from "react";
import { useSelector } from "react-redux";

const CheckOutmsg = () => {
  return (
    <div className="container" id="msg-id">
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className=" justify-content-center">
            <h3 className="d-flex justify-content-between align-items-center mb-3">
              Your product has been placed
            </h3>
            <h1 id="msg">Thank You</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutmsg;
