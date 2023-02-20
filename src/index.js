import React, { Component } from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import "./index.css";
import "./components/MenuBar.css";
import "./components/Products.css";
import App from "./App";
import store from "./components/redux/Store";
import reportWebVitals from "./reportWebVitals";
import "./components/styles.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// <link
// rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">
// </link>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
