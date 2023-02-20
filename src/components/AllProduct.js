import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent1 from "./ProductComponent1";
import { fetchProducts } from "./redux/actions/productActions";
import Header from "./Header";

const AllProduct = () => {
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state);
  // dispatch the console.log products in ui we use the dispatch hook and action setproducts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products:", products);
  console.log({ search });
  return (
    <>
      <h1
        className="m-4  a-fluid"
        style={{ color: "#f43397", alignItems: "center" }}
      >
        Fashbea Trends{" "}
      </h1>
      <form>
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name & Try Saree,Kurti by their name ..."
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginLeft: 100 }}
          />
        </div>
      </form>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        <hr></hr>

        <ProductComponent1 search={search} />
      </div>
    </>
  );
};

export default AllProduct;
