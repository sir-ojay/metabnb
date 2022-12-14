import React from 'react'
import { Link } from "react-router-dom";
import {IoMdOptions} from 'react-icons/io'
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
      <div>
        <div>
          <input
            type="text"
            placeholder="Location"
            className="button__location"
          />
          <IoMdOptions  className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default Location