import React from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "./aboutus.jpg";
const About = () =>  {
  return (
    <div>
      <div  className="container py-5 my-3">
        <div className="row">
          <div className="col-md-6">
            <h1 className=" fw-bold mb-4">About Us</h1>
            <h4>Fashbea: Affordable Online Shopping at Your Fingertips</h4>
            <p className="lead mb-4">
              There are many benefits of shopping online. You can take your time
              and look at different options to find exactly what you want. It's
              easy to compare prices online and find exactly what you are
              looking for. And now with Meesho, you can shop for anything you
              want at the lowest prices in the market. Even if you want to shop
              for cool gifts for your friends and family, there are many options
              that you can find on the Internet.{" "}
            </p>
            <h4>A Huge Selection of Products Across All Categories</h4>
            <p className="lead mb-4">
              We have a vast inventory of products ranging from apparel to
              cosmetics to home utility and kitchen products and more. With over
              50 lakh products and 650+ product categories, Meesho is sure to
              have everything you need. In our latest collections, you will find
              all the popular items at an affordable price, so you can be
              confident you're getting the best deal. Whether you're in the
              market for new clothes, accessories, or just some daily-use items
              for home, Fashbea has what you need.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary ms-2 ">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center my-5">
            <img
              src={AboutUs}
              alt="About Us"
              height="400px"
              width="500px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
