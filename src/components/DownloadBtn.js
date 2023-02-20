import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const DownloadBtn = () => {
  return (
    <>
      <Link
        to="https://play.google.com/store/apps/details?id=com.meesho.supply"
        target="_blank"
        className="btn btn-outline-primary ms-2"
      >
        <span className="fa fa-download me-1"></span>
        Download
      </Link>
    </>
  );
};

export default DownloadBtn;
