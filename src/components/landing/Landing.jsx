import React from "react";
import "./landing.scss";
import landingimage from '../../assets/landing.png'

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__desc">
        <h1>
          Rent a <b>Place</b> away from <b>Home</b> in the <b>Metaverse</b>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <div className="landing__search">
          <input type="text" placeholder="Search  for location" />{" "}
          <button>
            <p>Search</p>
          </button>
        </div>
      </div>

      <div className="landing__images">
        <img src={landingimage} alt=""  />

      </div>
    </div>
  );
};

export default Landing;
