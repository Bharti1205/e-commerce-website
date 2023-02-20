import React, { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "./redux/actions/productActions";
import Header from "./Header";

const ProductListing = () => {
  const [filter, setFilter] = useState("");

  const setHandleValue = (data) => {
    setFilter(data);
  };
  console.log(filter);
  const products = useSelector((state) => state);
  // dispatch the console.log products in ui we use the dispatch hook and action setproducts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products:", products);
  return (
    <>
      <div className="m-4  a-fluid" style={{ alignItems: "center" }}>
        <button
          class="dropbtn"
          onClick={() => setHandleValue("men's clothing")}
        >
          Men
        </button>
        <button class="dropbtn" onClick={() => setHandleValue("jewelery")}>
          Jewellery
        </button>
        <button class="dropbtn" onClick={() => setHandleValue("electronics")}>
          Electronic
        </button>
        <button
          class="dropbtn"
          onClick={() => setHandleValue("women's clothing")}
        >
          Women
        </button>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          justifyContent: "space-around",
        }}
      >
        <Header />
        <h1 className="heading" style={{ paddingRight: 190 }}>
          {" "}
          Top Categories to choose from
        </h1>
        <hr></hr>

        <ProductComponent filter={filter} />
      </div>
    </>
  );
};

export default ProductListing;
