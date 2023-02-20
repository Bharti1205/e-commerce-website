import React from "react";

const Login = () => {
  return (
    <>
      {/* button trigger modal */}
      <button
        type="button"
        class="btn btn-outline-primary ms-3 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Login
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
                Sign in with Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span>
                Sign in with Facebook
              </button>
              <form action="" class="needs-validation" novalidate>
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
                  <div class="invalid-feedback">
                    {" "}
                    Please enter your user name{" "}
                  </div>
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
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
                  <div class="invalid-feedback">Please enter your password</div>
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
                  <div class="invalid-feedback">Select this option</div>
                </div>
                <button
                  type="submit"
                  class="btn btn-outline-primary w-100 mt-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
