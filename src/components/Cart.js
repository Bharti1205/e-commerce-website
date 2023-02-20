import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "./redux/actions/productActions";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const handleClose = (product) => {
    dispatch(delCart(product));
  };

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 style={{ color: "#f43397" }}>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  // cart
  const cartItems = (product) => {
    return (
      <div>
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={product.id}>
          <div className="container py-4">
            <button
              onClick={() => handleClose(product)}
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <h5>{product.description}</h5>
                <p className="lead fw-bold">
                  {product.qty} X ₹{product.price} = ₹
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark "
                  onClick={() => handleDel(product)}
                >
                  {" "}
                  Delete
                  <i className="fa fa-minus ms-3"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  Add
                  <i className="fa fa-plus ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const buttons = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
