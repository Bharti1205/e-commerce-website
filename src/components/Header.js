import React from "react";
import MeeshoImage from "./meesho.png";
import MeeshoImage1 from "./meesho1.png";
import MeeshoImage2 from "./meesho2.png";
import MeeshoImage3 from "./meesho3.png";

const Header = () => {
  return (
    <div>
      {/* <img className="banner" src={MeeshoImage}  />
     <br></br> */}

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="img">
              <img
                class="d-block img-fluid "
                src={MeeshoImage1}
                alt="First slide"
                style={{ height: 400, width: 900 }}
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="img">
              <img
                class="d-block img-fluid "
                src={MeeshoImage3}
                alt="First slide"
                style={{ height: 400, width: 900 }}
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="img">
              <img
                class="d-block img-fluid "
                src={MeeshoImage2}
                alt="First slide"
                style={{ height: 400, width: 900 }}
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="img">
              <img
                class="d-block img-fluid "
                src={MeeshoImage}
                alt="First slide"
                style={{ height: 400, width: 900 }}
              />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <br></br>
    </div>
  );
};
export default Header;
