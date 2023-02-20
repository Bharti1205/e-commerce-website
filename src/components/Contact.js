import React from "react";
import { NavLink } from "react-router-dom";
import ContactUs from "./contactus.png";

import "./styles.css";
const contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h1 className="mt-3">Have Queries</h1>
            <div>
              <form action="" class="needs-validation" novalidate>
                <div class="mb-3 mt-4">
                  <label for="exampleInput" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    required
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Please enter your user name{" "}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div class="invalid-feedback"> Please enter your email </div>
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Query
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    required
                  ></textarea>
                  <div class="invalid-feedback"> Write your queries here </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-outline-primary w-100 mt-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div
            className="col-md-6 d-flex justify-content-center"
            style={{ marginTop: 163 }}
          >
            <img
              src={ContactUs}
              alt="About Us"
              height="200px"
              width="300px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
