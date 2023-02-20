import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col  mr-5">
            <h4>Shop on Fashbea</h4>
            <ul className="list-unstyled">
              <li>trusted by more than 1 crore Indians</li>
              <li>Cash on Delivery | Free Delivery</li>
              <li>Hall of Fame </li>
            </ul>
          </div>

          {/* Column 2 */}

          <div className="col  mr-5">
            <h5>Become a supplier</h5>
            <ul className="list-unstyled">
              <li> Legal and Policies</li>
              <li>Fashbea Tech Blog</li>
              <li>Notices and Returns </li>
            </ul>
          </div>
          {/* Column 3 */}

          <div className="col  mr-5">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li> Fashnear Technologies Private Limited</li>
              <li>
                Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103,
                Karnataka, India
              </li>
              <li>E-mail address: query@meesho.com</li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="row">
          <p className="col-sm ms-3">
            &copy;{new Date().getFullYear()} Fashbea | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
