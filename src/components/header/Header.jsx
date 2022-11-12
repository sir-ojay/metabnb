import React from "react";
import logo from "../../assets/headerlogo.svg";

import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="logo__warapper">
        <img src={logo} alt="" className="header__logo" />
      </div>

      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/PlaceToStay" style={{ textDecoration: "none" }}>
          <li>Place to stay</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>NFTs</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Community</li>
        </Link>
      </ul>

      <div className="header__wallet">
        <button>
          {" "}
          <p>Connect wallet</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
