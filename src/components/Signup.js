import React from "react";

const Signup = () => {
  return (
    <>
      {/* button trigger modal */}
      <button
        type="button"
        class="btn btn-outline-primary ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>

      {/* modal */}
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Signup
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span>
                Sign up with Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>
                Sign up with Facebook
              </button>
              <form action="" class="needs-validation" novalidate>
                <div class="mb-3">
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
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                  <div class="invalid-feedback">
                    {" "}
                    Please enter your user name{" "}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Please enter your password{" "}
                  </div>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                  <div class="invalid-feedback"> Please check this </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-outline-primary w-100 mt-5"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
