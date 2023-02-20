import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Signup from "./components/Signup";

import Login from "./components/Login";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import AllProduct from "./components/AllProduct";
import "./components/Products.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/About";
import Checkout from "./components/Checkout";
import CheckOutmsg from "./components/CheckOutmsg";

import DownloadBtn from "./components/DownloadBtn";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutmsg" element={<CheckOutmsg />} />
          <Route path="/download" element={<DownloadBtn />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/AllProduct" element={<AllProduct />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
