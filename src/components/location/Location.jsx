import React from 'react'
import { Link } from "react-router-dom";
import './location.scss'

const Location = () => {
  return (
    <div className="location__wrapper">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Resturant</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Cottage</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Castle</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>fantast city</li>
        </Link>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>beach</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Carbins</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Off-grid</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Farm</li>
          </Link>
        </ul>
      </ul>
      <div>
        <p>Location</p>
      </div>
    </div>
  );
}

export default Location